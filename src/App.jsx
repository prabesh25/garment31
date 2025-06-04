import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Home/Hero";
import Summer from "./components/Home/Summer";
import TwoImages from "./components/Home/TwoImages";
import Tshirts from "./components/Home/Tshirts";
import TwoImgContainer from "./components/Home/TwoImgContainer";
import Cloathing from "./components/Home/Cloathing";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Summer />
      <TwoImages />
      <Tshirts />
      <TwoImgContainer />
      <Cloathing/>
      <Footer/>
    </>
  );
}

export default App;
