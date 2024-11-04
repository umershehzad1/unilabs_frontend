"use client";
import "./globals.css";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';
import 'react-circular-progressbar/dist/styles.css';
import 'aos/dist/aos.css';

import { Quicksand, Smooch_Sans, Outfit } from 'next/font/google';
import { usePathname } from 'next/navigation';
import DashboardLayout from './DashboardLayout';
import LandingLayout from './LandingLayout';
import React, { useEffect, useState, Suspense } from 'react';
import DynamicTitle from "@/components/DynamicTitle";
import Head from 'next/head';

const smoochSans = Smooch_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-smooch-sans',
});
const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const isDashboard = pathname?.startsWith('/dashboard');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Loading...</title>
        </Head>
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  const Layout = isDashboard ? DashboardLayout : LandingLayout;

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <body className={`m-0 ${smoochSans.variable} ${quicksand.variable} ${outfit.variable}`}>
        <DynamicTitle />
        <Suspense fallback={<div>Loading layout...</div>}>
          <Layout>
            {children}
          </Layout>
        </Suspense>
      </body>
    </html>
  );
}
