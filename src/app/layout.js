"use client";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outfit, Quicksand, Smooch_Sans } from 'next/font/google';
import Head from 'next/head';
import 'react-circular-progressbar/dist/styles.css';
import 'swiper/swiper-bundle.css';
import ClientWrapper from "./ClientWrapper";
import "./dashboard.css";
import "./globals.css";

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
 
 

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <body className={`m-0 ${smoochSans.variable} ${quicksand.variable} ${outfit.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
