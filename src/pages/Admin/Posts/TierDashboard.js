import React from "react";
import TierTable from "../../../components/Admin/Tier/TierTable";
import TitleSection from "../../../components/Admin/TitleSection";

export default function TierDashboard() {
  return (
    <>
      <TitleSection title="Tiers" icon="bi-newspaper"/>
      <TierTable />
    </>
  )
}
