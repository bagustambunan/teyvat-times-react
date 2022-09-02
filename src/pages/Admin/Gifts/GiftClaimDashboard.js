import React from 'react'
import GiftClaimTable from '../../../components/Admin/GiftClaim/Table/GiftClaimTable'
import TitleSection from '../../../components/Admin/TitleSection'

export default function GiftClaimDashboard() {
  return (
    <>
      <TitleSection title="Gift Claims" icon="bi-gift" />
      <GiftClaimTable />
    </>
  )
}
