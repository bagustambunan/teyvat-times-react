import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../store/tokenSlice';
import { setUser } from '../store/userSlice';

export default function AuthHelper(auth, role, setLoadingFalse) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkValidToken = () => {
    // if auth token is not valid
    if (auth.getToken() === undefined) {
      const token = localStorage.getItem('token');
      // if local storage token is valid
      if (token !== null) {
        auth.setToken(token);
        dispatch(setToken(token));
        checkValidToken();
      } else {
        window.location.href = '/logout';
      }
    } else {
      checkUndefinedUser();
    }
  };

  const checkUndefinedUser = () => {
    if (auth.getUser() === undefined) {
      fetchUser();
    }
  };

  const getUserId = () => {
    try {
      jwt_decode(auth.getToken());
    } catch (err) {
      console.log(err);
    } finally {
      const decoded = jwt_decode(auth.getToken());
      return decoded.user.userID;
    }
  };

  const fetchUser = () => {
    fetch(`http://localhost:8080/pub/users/${getUserId()}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          dispatch(setUser(res.data));
          auth.setUser(res.data);
          checkAuthorization();
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const checkAuthorization = () => {
    if (role === 'internal') {
      if (auth.authorizeInternal()) {
        setLoadingFalse();
      } else {
        navigate('/');
      }
    }
    if (role === 'public') {
      if (auth.authorizePublic()) {
        setLoadingFalse();
      }
    }
  };

  checkValidToken();
}
