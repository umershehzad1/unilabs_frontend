"use client"
import AllYouNeed from '@/components/Home/AllYouNeed';
import Attributes from '@/components/Home/Attributes';
import Hero from '@/components/Home/Hero';
import ManageTransactions from '@/components/Home/ManageTransactions';
import PoweredBy from '@/components/Home/PoweredBy';
import Presales from '@/components/Home/Presales';
import RoadMaps from '@/components/Home/RoadMaps';
import SpreadTheWorld from '@/components/Home/SpreadTheWorld';
import Tokenomics from '@/components/Home/Tokenomics';
import Unique from '@/components/Home/Unique';
import WhyUnilabs from '@/components/Home/WhyUnilabs';
import Youtube from '@/components/Home/Youtube';
import Faqs from '@/components/shared/Faqs';
import AOS from 'aos';
import React, { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <Presales />
      <ManageTransactions />
      <div className='whybg'>
        <WhyUnilabs />
        <PoweredBy />
      </div>
      <RoadMaps />
      <Unique />
      <Youtube />
      <AllYouNeed />
      <Attributes />
      <SpreadTheWorld />
      <Tokenomics />
      <Faqs />
    </>
  );
}

export default Page;
