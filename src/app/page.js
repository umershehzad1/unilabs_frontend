"use client";
import Attributes from '@/components/Home/Attributes';
import Hero from '@/components/Home/Hero';
import Tokenomics from '@/components/Home/Tokenomics';
import AOS from 'aos';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import HowItWorks from './HowItWorks/page';

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

      {/* <UnilToken/> */}
      {/* <RoadMaps /> */}
      {/* <Faqs />  */}



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