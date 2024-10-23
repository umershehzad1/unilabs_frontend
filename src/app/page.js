import Hero from '@/components/Home/Hero'
import ManageTransactions from '@/components/Home/ManageTransactions'
import PoweredBy from '@/components/Home/PoweredBy'
import Presales from '@/components/Home/Presales'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Presales />
      <ManageTransactions />
      <PoweredBy />
    </>
  )
}

export default page