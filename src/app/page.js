"use client";
import BlurShadowLayer from '@/components/BlurShadow';
import Attributes from '@/components/Home/Attributes';
import Hero from '@/components/Home/Hero';
import RoadMaps from '@/components/Home/RoadMaps';
import Tokenomics from '@/components/Home/Tokenomics';
import Faqs from '@/components/shared/Faqs';
import Subscribe from '@/components/shared/Subscribe';
import AOS from 'aos';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import HowItWorks from '../components/HowItWorks/page';
import WalletInfo from '@/components/Home/WalletInfo';

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
      {/* {isConnected&& <WalletInfo />} */}
      <Tokenomics />
      <RoadMaps />
      <BlurShadowLayer />
      <Faqs />
      <Subscribe />

      {/* <UnilToken/> */}
      {/* <ManageTransactions /> */}
      {/* <PoweredBy /> */}
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