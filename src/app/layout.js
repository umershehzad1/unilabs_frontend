import DynamicTitle from "@/components/shared/DynamicTitle";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outfit, Quicksand, Smooch_Sans } from "next/font/google";
import Head from "next/head";
import "react-circular-progressbar/dist/styles.css";
import 'react-phone-number-input/style.css';
import 'react-vertical-timeline-component/style.min.css';
import "swiper/swiper-bundle.css";
import "./animation.css";
import ClientWrapper from "./ClientWrapper";
import "./custom.css";
import "./dashboard.css";
import "./globals.css";


const smoochSans = Smooch_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-smooch-sans",
});
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "UniLabs | The Leading AI DeFi Asset Management Platform",
  description:
    "Unilabs is the first AI-based asset management platform that is unleashing opportunities for generational wealth through intuitive capital allocation.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <DynamicTitle />
      <body suppressHydrationWarning
        className={`m-0 ${smoochSans.variable} ${quicksand.variable} ${outfit.variable}`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
