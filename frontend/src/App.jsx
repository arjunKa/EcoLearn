import React, { Component } from "react";
//import Modal from "./components/Modal";
//import axios from "axios";
import "./App.css";
import Navbar2 from "./components/Navbar/Navbar2";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Tools from "./pages/tools";
import Impact from "./pages/impact";
import Projects from "./pages/projects";
import Resources from "./pages/resources/resources";
import AboutUs from "./pages/aboutUs/aboutUs";

function App() {
  return (
    <div>
      <Navbar2 />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/tools" element={<Tools/>} />
        <Route path="/impact" element={<Impact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
