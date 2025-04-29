import React from "react";
import Contact from "./Contact";
import Univercitys from "./slider/Univercitys";
import ContactUs from "./ContactUs";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="bg-blue-seondary">
      <Contact />
      <Univercitys />
      <ContactUs />
      {/* <FooterLinks /> */}
    </div>
  );
};

export default Footer;
