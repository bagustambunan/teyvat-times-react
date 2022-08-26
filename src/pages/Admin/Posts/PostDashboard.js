import React from 'react';
import { NavLink } from 'react-router-dom';
import TitleSection from '../../../components/Admin/TitleSection';
import PostTable from '../../../components/Admin/Post/Table/PostTable';
import ButtonIcon from '../../../components/ButtonIcon';

export default function PostDashboard() {
  return (
    <>
      <TitleSection title="Posts" icon="bi-newspaper" />
      <NavLink to="/admin/posts/new">
        <ButtonIcon text="New" icon="bi-plus" />
      </NavLink>
      <PostTable />
    </>
  );
}
