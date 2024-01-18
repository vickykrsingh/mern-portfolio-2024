import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import { Toaster } from "react-hot-toast";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/hire" element={<Hireme/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Toaster/> */}
    </Routes>
  );
};

export default App;
