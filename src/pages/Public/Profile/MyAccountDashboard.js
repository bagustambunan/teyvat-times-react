import React from 'react';
import { useSelector } from 'react-redux';
import AccountInfo from '../../../components/Public/Profile/MyAccount/AccountInfo';
import AddressInfo from '../../../components/Public/Profile/MyAccount/AddressInfo';
import PicInfo from '../../../components/Public/Profile/MyAccount/PicInfo';
import ButtonIcon from '../../../components/ButtonIcon';
import { selectUser } from '../../../store/userSlice';

export default function AccountDashboard() {
  const user = useSelector(selectUser);
  return (
    <div className="">
      <PicInfo image={user.profilePic} />
      <AccountInfo user={user} />
      <AddressInfo address={user.address} />
      <ButtonIcon text="Change password" icon="bi-pencil" />
    </div>
  );
}
