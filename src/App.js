import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
      <Work/>
      <Contact/>
      <Footer/>      
    </BrowserRouter>
  );
};

export default App;