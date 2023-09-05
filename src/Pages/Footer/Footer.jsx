import React, { useEffect } from "react";
import "./Footer.css";
import FooterMenuDiv from "../../Components/FooterMenuDiv/FooterMenuDiv";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const menuSections = [
    {
      title: "About",
      menuItems: ["About Us", "Affiliates", "Careers", "Media"],
    },

    {
      title: "Become Seller",
      menuItems: ["Add Vechicles", "Resource Center", "Bonds", "Release Dates"],
    },

    {
      title: "Comunity",
      menuItems: ["Recomendations", "Gift Cards", "Top Ups", "Selling"],
    },

    {
      title: "Booking Support",
      menuItems: [
        "Frequently Asked Questions",
        "Cancellation Policy",
        "Refunds",
        "Contact Support",
      ],
    },
    // Add more menu sections as needed
  ];
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div data-aos="fade-up" className="footerMenuDiv grid">
          {menuSections.map((section, index) => (
            <FooterMenuDiv
              key={index}
              title={section.title}
              menuItems={section.menuItems}
            />
          ))}
        </div>

        <div className="lowerSection grid">
          <p>All rights reserved</p>
          <blockquote>CarConnect Project</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Footer;
