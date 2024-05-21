import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";



import {Route} from "react-router-dom";
import ImagesSlider from "./Components/Home Page/Home";
import SliderComponent from "./Components/Home Page/Home";
import CarouselPage from "./Components/Home Page/Home";
import HomePage from "./Components/Home Page/Home";
import AboutPage from "./Components/About Page/about";
import ContactForm from "./Components/Contact Form/contact-form";
import Footer from "./Components/Footer/footer";



function App() {
  return (
   <>
     <Navbar/>
       <HomePage/>
       <AboutPage/>
       <ContactForm/>
       <Footer/>


   </>
  );
}

export default App;
