import AllYouNeed from '@/components/Home/AllYouNeed'
import Attributes from '@/components/Home/Attributes'
import Hero from '@/components/Home/Hero'
import ManageTransactions from '@/components/Home/ManageTransactions'
import PoweredBy from '@/components/Home/PoweredBy'
import Presales from '@/components/Home/Presales'
import SpreadTheWorld from '@/components/Home/SpreadTheWorld'
import Unique from '@/components/Home/Unique'
import WhyUnilabs from '@/components/Home/WhyUnilabs'
import Youtube from '@/components/Home/Youtube'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Presales />
      <ManageTransactions />
      <PoweredBy />
      <WhyUnilabs />
      <Unique />
      <Youtube />
      <AllYouNeed />
      <Attributes/>
      <SpreadTheWorld/>
    </>
  )
}

export default page