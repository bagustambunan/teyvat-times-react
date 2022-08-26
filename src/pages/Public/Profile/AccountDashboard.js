import React from 'react';
import { useSelector } from 'react-redux';
import AccountInfo from '../../../components/Public/Profile/Account/AccountInfo';
import AddressInfo from '../../../components/Public/Profile/Account/AddressInfo';
import PicInfo from '../../../components/Public/Profile/Account/PicInfo';
import ButtonIcon from '../../../components/ButtonIcon';
import { selectUser } from '../../../store/userSlice';

export default function AccountDashboard() {
  const user = useSelector(selectUser);
  return (
    <div className="p-3">
      <PicInfo image={user.profilePic} />
      <AccountInfo user={user} />
      <AddressInfo address={user.address} />
      <ButtonIcon text="Change password" icon="bi-pencil" />
    </div>
  );
}
