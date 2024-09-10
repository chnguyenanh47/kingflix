import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import FooterM from "./Footer/FooterM";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="bg-main text-white">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <FooterM></FooterM>
      </div>
    </>
  );
};

export default Layout;
