import React from "react";
//import About from "../Components/About";
//import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/NavBar";
import TimeLine from "../Components/TimeLine";
// import People from "../Components/People";
// import Projects from "../Components/Projects";
// import Resume from "../Components/Resume";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TimeLine/>
      <Footer/>
      {/* <Resume />
      <Projects />
      <People />
      <Contact /> */}
      
    </>
  );
};

export default Home;
