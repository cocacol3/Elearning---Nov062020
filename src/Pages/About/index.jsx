import React from "react";
import PageBanner from "../../Components/PageBanner/index";
import { useState } from "react";
import PreloadingPage from "../../Components/PreloadingPage/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import History from "../../Components/AboutOurHistory/index"
import Banner from "../../Components/AboutBanner/index"
import Partner from "../../Components/AboutOurPartners/index"

const About = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);

  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <PageBanner title='About Us'/>
          <History />
          <Banner />
          <Partner />
          <Footer />
        </>
      )}
    </>
  );
};
export default About;
