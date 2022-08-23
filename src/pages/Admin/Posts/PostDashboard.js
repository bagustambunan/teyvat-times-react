import React from "react";
import TitleSection from "../../../components/Admin/TitleSection";
import PostTable from "../../../components/Admin/Post/Table/PostTable";
import LinkIcon from "../../../components/LinkIcon";

export default function PostDashboard() {
  return (
    <>
      <TitleSection title="Posts" icon="bi-newspaper"/>
      <LinkIcon link="/admin/posts/new" icon="bi-plus"/>
      <PostTable />
    </>
  );
}
