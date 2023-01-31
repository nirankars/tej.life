import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function index() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
