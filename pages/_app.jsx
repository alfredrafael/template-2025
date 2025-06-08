import "@styles/globals.css";
import Head from "next/head";
import Footer from "@components/Footer";
import { LanguageProvider } from "@components/LanguageContext";
import { navItems } from "../data/navbarData";

import Navbar from "@components/Navbar";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your site name goes here</title>
        <meta
          name="description"
          content="Your application description goes here"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Your site names goes here" />
        <link rel="icon" href="/faviconGoesHere.png" />
      </Head>
      <LanguageProvider>
        <Navbar
          navItems={navItems}
          bgColor={"#040182"}
          dropDownBg={"#37358c"}
          dropDownBgHover={"#222080"}
        />
        <Component {...pageProps} />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default Application;
