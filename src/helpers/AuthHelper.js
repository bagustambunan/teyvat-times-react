import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import {
  setToken
} from "../store/tokenSlice";
import {
  setUser
} from "../store/userSlice";

export default function AuthHelper(auth, role, setLoadingFalse) {
  const dispatch = useDispatch();
  
  const checkUndefinedToken = () => {
    if (auth.getToken() === undefined) {
      const token = localStorage.getItem("token");
      auth.setToken(token);
      // set token slicer
      // dispatch(setToken("haha"));
      dispatch(setToken(token));
    }
  }

  const checkUndefinedUser = () => {
    if (auth.getUser() === undefined) {
      console.log("Slicer user is undefined");
      // set user slicer
      fetchUser();
    }
  }

  const checkValidToken = () => {
    if (auth.getToken() === null) {
      console.log("TOKEN IS NOT VALID");
      return "TOKEN NOT VALID";
    } else {
      console.log("TOKEN IS VALID");
      // check if user slice exist
      checkUndefinedUser();
    }
    // console.log(auth.getToken());
  }

  const getUserId = () => {
    try {
      jwt_decode(auth.getToken())
    }
    catch(err) {
      console.log(err);
    }
    finally {
      const decoded = jwt_decode(auth.getToken())
      return decoded.user.userID;
    }
  }

  const fetchUser = () => {
    fetch("http://localhost:8080/pub/users/"+getUserId(), {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${auth.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          // const fetchedUser = new User(
          //   res.data.userID,
          //   res.data.role,
          //   res.data.username,
          //   res.data.email,
          //   res.data.name,
          //   res.data.phone,
          //   res.data.address,
          //   res.data.profilePic,
          // );
          // console.log(res.data);
          dispatch(setUser(res.data));
          setLoadingFalse();
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  checkUndefinedToken();
  checkValidToken();
  
  // authorize public
  // authorize internal

}