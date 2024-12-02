"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import Hero from '@/components/Home/Hero';
import Presales from '@/components/Home/Presales';
import ManageTransactions from '@/components/Home/ManageTransactions';
import PoweredBy from '@/components/Home/PoweredBy';
import RoadMaps from '@/components/Home/RoadMaps';
import Unique from '@/components/Home/Unique';
import WalletInfo from '@/components/Home/WalletInfo';
import WhyUnilabs from '@/components/Home/WhyUnilabs';
import Youtube from '@/components/Home/Youtube';
import AllYouNeed from '@/components/Home/AllYouNeed';
import Attributes from '@/components/Home/Attributes';
import SpreadTheWorld from '@/components/Home/SpreadTheWorld';
import Tokenomics from '@/components/Home/Tokenomics';
import Faqs from '@/components/shared/Faqs';
import { useAccount } from 'wagmi';
import HowItWorks from './howitworks/page';
import WavyLine from '@/components/shared/WavyLineHero';
import UnilToken from '@/components/unilToken/UnilToken';

const LandingPage = () => {
  const isConnected = useAccount()
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <PoweredBy />
      <ManageTransactions />
      <HowItWorks />
      <Attributes />
      <UnilToken/>
      <RoadMaps />
      <Faqs /> 



      {/* {isConnected&& <WalletInfo />} */}
      {/* <WhyUnilabs /> */}
      {/* <Presales /> */}
      {/* <Unique /> */}
      {/* <Youtube /> */}
      {/* <AllYouNeed /> */}
      {/* <Tokenomics /> */}
      {/* <SpreadTheWorld /> */}

    </>
  );
};

export default LandingPage;