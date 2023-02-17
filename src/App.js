import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import  {Home } from './components/Home/Home'
import  Navbar  from './components/Navbar/Navbar'
import Footer from './components/footer/Footer';
import Fibonacci from './components/examples/Fibonacci';
import { Piramide } from './components/examples/Piramide';
import { Primo } from './components/examples/Primo';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Piramide />
      <Primo/>
      <Fibonacci />
      <Footer />
      <ScrollToTop smooth
        height='20'
        width='20'
        style={{ borderRadius: "90px" }} />
    </>

  )
}

export default App