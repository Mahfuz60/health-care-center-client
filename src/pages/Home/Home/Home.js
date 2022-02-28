import React from "react";
import AppointmentBanner from "../AppointmentBannar/AppointmentBannar";
import Contact from "../Contact/Contact";
import DentalInfo from "../DentalInfo/DentalInfo";
import HomeBanner from "../HomeBanner/HomeBanner";
import OurDoctor from "../OurDoctor/OurDoctor";

import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <DentalInfo></DentalInfo>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <OurDoctor></OurDoctor>
      <Contact></Contact>
    </>
  );
};

export default Home;
