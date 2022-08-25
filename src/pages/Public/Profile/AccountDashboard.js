import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import AccountInfo from '../../../components/Public/Profile/Account/AccountInfo'
import AddressInfo from '../../../components/Public/Profile/Account/AddressInfo';

export default function AccountDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');

  const fetchUser = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/pub/users/"+getUserId(), {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          console.log(res);
          setUser(res.data);
          setIsLoading(false);
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const getToken = () => localStorage.getItem("token");
  const getUserId = () => {
    if (getToken() !== null) {
      const decoded = jwt_decode(getToken());
      return decoded.user.userID;
    }
  }

  useEffect(() => {
    fetchUser();
  },[])

  if (isLoading) {
    return "Loading..."
  }

  return (
    <div className="p-3">
      <AccountInfo user={user} />
      <AddressInfo address={user.address} />
    </div>
  )
}
