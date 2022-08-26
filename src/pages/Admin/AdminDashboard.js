import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectUser
} from '../../store/userSlice';

export default function AdminDashboard() {
  const user = useSelector(selectUser);
  console.log("User via redux");
  console.log(user);
  return (
    <div>AdminDashboard</div>
  )
}
