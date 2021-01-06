import React, { useState } from "react";
import Header from "../../Components/Header/index";
import Carousel from "../../Components/Carousel/index";
import Banner from "../../Components/Banner/index";
import Category from "../../Components/Category/index";
<<<<<<< HEAD
import AdverBanner from "../../Components/AdverBanner/index";
=======
import AdvertBanner from "../../Components/AdvertBanner/index";
>>>>>>> update2021
import Course from "../../Components/Course";
import BottomBanner from "../../Components/HomeBottomBanner";
import OurTeacher from "../../Components/HomeOurTeachers";
import Event from "../../Components/HomeUpcomingEvent";
import Footer from "../../Components/Footer";
import PreloadingPage from "../../Components/PreloadingPage/index";

const Home = () => {
  //Loading Page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of loaing page

  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <Carousel />
          <Banner />
          <Category />
<<<<<<< HEAD
          <AdverBanner />
          <Course />
          <BottomBanner />
          <OurTeacher />
=======
          <AdvertBanner />
          <Course />
          <BottomBanner />
          <OurTeacher/>
>>>>>>> update2021
          <Event />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
