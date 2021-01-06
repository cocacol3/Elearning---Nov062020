import React from "react";
import PageBanner from "../../Components/PageBanner/index";
import { useState } from "react";
import PreloadingPage from "../../Components/PreloadingPage/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
<<<<<<< HEAD
import Content from "../../Components/AboutContent/index";
=======
>>>>>>> update2021
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
<<<<<<< HEAD
          <PageBanner />
          <Content />
=======
          <PageBanner title='About Us'/>
>>>>>>> update2021
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
