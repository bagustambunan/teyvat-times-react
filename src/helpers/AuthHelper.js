import { useDispatch } from 'react-redux';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../store/tokenSlice';
import { setUser } from '../store/userSlice';
import { apiUrl } from './values';

export default function AuthHelper(auth, role, setLoadingFalse) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserId = () => {
    const decoded = jwt_decode(auth.getToken());
    return decoded.user.userID;
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

  const fetchUser = () => {
    fetch(`${apiUrl}/pub/users/${getUserId()}`, {
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
          // toast.error(`Error: ${res.message}`);
          navigate('/logout');
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const checkUndefinedUser = () => {
    if (auth.getUser() === undefined) {
      fetchUser();
    }
  };

  const checkValidToken = () => {
    if (auth.getToken() === undefined) {
      const token = localStorage.getItem('token');
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

  checkValidToken();
}
