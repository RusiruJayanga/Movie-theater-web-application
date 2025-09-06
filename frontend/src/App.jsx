import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//scroll to top
import ScrollToTop from "../src/config/ScrollToTop";
//main components
import Navigation_bar_head from "./components/user/navigation/Navigation_bar_head";
import Navigation_bar from "./components/user/navigation/Navigation_bar";
import Footer from "./components/user/footer/Footer";
//pages
//user pages
import Home from "./pages/user/home/Home";
import Details from "./pages/user/details/Details";

function App() {
  return (
    <div>
      <ScrollToTop />
      {/* navigation */}
      <Navigation_bar_head />
      <Navigation_bar />
      {/* pages */}
      {/* user pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
