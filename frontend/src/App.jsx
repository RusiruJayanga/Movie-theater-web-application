import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
//scroll to top
import ScrollToTop from "../src/config/ScrollToTop";
//alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//main components
import Navigation_bar_head from "./components/user/navigation/Navigation_bar_head";
import Navigation_bar from "./components/user/navigation/Navigation_bar";
import Footer from "./components/user/footer/Footer";
//pages
//user pages
import Home from "./pages/user/home/Home";
import Details from "./pages/user/details/Details";
import Login from "./components/user/login/Login";
import Account from "./pages/user/account/Account";
import Ticket from "./pages/user/ticket/Ticket";
import Checkout from "./pages/user/checkout/Checkout";
import Booking from "./pages/user/booking/Booking";

function App() {
  //hide footer and navigation
  const location = useLocation();
  const hideFooterPaths = ["/login", "/signup"];
  return (
    <div>
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        style={{ zIndex: 10200, cursor: "default" }}
      />
      {/* navigation */}
      {!hideFooterPaths.includes(location.pathname) && <Navigation_bar_head />}
      {!hideFooterPaths.includes(location.pathname) && <Navigation_bar />}
      {/* pages */}
      {/* user pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      {/* footer */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
