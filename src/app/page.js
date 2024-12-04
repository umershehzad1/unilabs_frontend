"use client";
import Attributes from '@/components/Home/Attributes';
import Hero from '@/components/Home/Hero';
import PoweredBy from '@/components/Home/PoweredBy';
import RoadMaps from '@/components/Home/RoadMaps';
import Faqs from '@/components/shared/Faqs';
import UnilToken from '@/components/unilToken/UnilToken';
import AOS from 'aos';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import HowItWorks from './howitworks/page';
import ManageTransactions from '@/components/Home/ManageTransactions';

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