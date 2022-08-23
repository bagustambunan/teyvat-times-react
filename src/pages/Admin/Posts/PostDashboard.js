import React from "react";
import TitleSection from "../../../components/Admin/TitleSection";
import PostTable from "../../../components/Admin/Post/Table/PostTable";

export default function PostDashboard() {
  return (
    <>
      <TitleSection title="Posts" icon="bi-newspaper"/>
      <PostTable />
    </>
  );
}
