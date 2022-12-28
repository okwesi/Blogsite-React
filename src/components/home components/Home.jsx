import CarouselComponent from "./Carousel";
import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Below_Carousel from "./small components/below_carousel";
import Post_Section from "./small components/post_section";
import About_Section from "./small components/about_section";
import Ministries from "./small components/ministries";

function Home() {
  return (
    <>
      {/* <CarouselComponent /> */}
      <img
        className="d-block image"
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        alt="First slide"
      />
      <Below_Carousel/>
      <Post_Section />
      <About_Section/>
      <Ministries/>
    
    </>
  );
}

export default Home;
// https://meet.google.com/shy-vzkq-nro
