import React from "react";
import TitleSection from "../../components/Admin/TitleSection";
import Table from "../../components/Admin/Post/Table";

export default function PostDashboard() {
  return (
    <>
      <TitleSection title="Posts" icon="bi-newspaper"/>
      <Table />
    </>
  );
}
