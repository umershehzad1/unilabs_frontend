"use client";
import Attributes from '@/components/Home/Attributes';
import Hero from '@/components/Home/Hero';
import Tokenomics from '@/components/Home/Tokenomics';
import AOS from 'aos';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import HowItWorks from '../components/HowItWorks/page'
import RoadMaps from '@/components/Home/RoadMaps';
import Faqs from '@/components/shared/Faqs';

const LandingPage = () => {
  const isConnected = useAccount()
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Attributes />
      <Tokenomics />
      <RoadMaps />
      <Faqs /> 

      {/* <UnilToken/> */}



      {/* <ManageTransactions /> */}
      {/* <PoweredBy /> */}
      {/* {isConnected&& <WalletInfo />} */}
      {/* <WhyUnilabs /> */}
      {/* <Presales /> */}
      {/* <Unique /> */}
      {/* <Youtube /> */}
      {/* <AllYouNeed /> */}
      {/* <SpreadTheWorld /> */}

    </>
  );
};

export default LandingPage;