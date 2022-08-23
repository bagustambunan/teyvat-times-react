import React from 'react'
import CategoryTable from '../../../components/Admin/Category/CategoryTable'
import TitleSection from "../../../components/Admin/TitleSection";

export default function CategoryDashboard() {
  return (
    <>
      <TitleSection title="Categories" icon="bi-newspaper"/>
      <CategoryTable />
    </>
  )
}
