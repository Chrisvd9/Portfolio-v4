import React from "react";
import VerticalSocialIcons from "../components/navigation/VerticalSocialIcons";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/ui/Footer";
import Anuncio from "../components/ui/Anuncio";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-full lg:px-8">
        <VerticalSocialIcons />

        <div className="p-4 lg:max-w-screen-md xl:max-w-screen-xl mx-auto w-full">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Anuncio />
        </div>
      </div>
    </>
  );
};

export default Layout;
