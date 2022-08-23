import React from 'react'
import { NavLink } from "react-router-dom";
import CategoryTable from '../../../components/Admin/Category/CategoryTable'
import TitleSection from "../../../components/Admin/TitleSection";
import ButtonIcon from "../../../components/ButtonIcon";

export default function CategoryDashboard() {
  return (
    <>
      <TitleSection title="Categories" icon="bi-newspaper"/>
      <NavLink to="/admin/categories/new">
        <ButtonIcon text="New" icon="bi-plus"/>
      </NavLink>
      <CategoryTable />
    </>
  )
}
