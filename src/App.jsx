import React from 'react';

import "./App.css";
import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Features from "./Components/Features.jsx";
import TopCoins from './Components/TopCoins.jsx';
import Footer from './Components/Footer.jsx';
import Charts from './Components/Charts.jsx';
import Contact from './Components/Contact';

const App = () => {
  return (
   <div className='bg-[#030120] h-[100%] scroll-smooth'>
    <Nav />
    <Hero />
    <About />
    <Features />
    <TopCoins />
    <Charts />
    <Contact />
    <Footer />
   </div>
  )
}

export default App