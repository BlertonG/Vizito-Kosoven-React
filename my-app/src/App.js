import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";


import {Route} from "react-router-dom";
import ImagesSlider from "./Components/Navbar/Home";
import SliderComponent from "./Components/Navbar/Home";
import CarouselPage from "./Components/Navbar/Home";
import HomePage from "./Components/Navbar/Home";



function App() {
  return (
   <>
     <Navbar/>
       <HomePage/>


   </>
  );
}

export default App;
