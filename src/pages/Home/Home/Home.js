import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import AppointmentBanner from "../AppointmentBannar/AppointmentBannar";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </>
  );
};

export default Home;
