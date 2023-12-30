import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Footer from "./components/Footer";
import AnimatedBg from "./components/AnimatedBg";

ReactDOM.render(
  <BrowserRouter>
    <AnimatedBg/>
    <Navbar/>
    <Bot/>
    <App />
    <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);
