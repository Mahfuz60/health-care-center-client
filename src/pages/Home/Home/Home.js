import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Contact from "../Contact/Contact";
import DentalInfo from "../DentalInfo/DentalInfo";
import HomeBanner from "../HomeBanner/HomeBanner";
import OurDoctor from "../OurDoctor/OurDoctor";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <DentalInfo></DentalInfo>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <OurDoctor></OurDoctor>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
