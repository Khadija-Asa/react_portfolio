import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/work" element={<Work />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;