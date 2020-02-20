import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import CallToAction from "./CallToAction";
import AboutUs from "./AboutUs"
import Sign from "./Sign";
import AboutAuthor from "./AboutAuthor"
import Footer from "./Footer";


const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <CallToAction />
      <AboutUs />
      <Sign />
      <AboutAuthor />
      <Footer />
    </>
  );
};

export default LandingPage;
