import React, { useEffect } from "react";
import "./FooterMenuDiv.css";

import Aos from "aos";
import "aos/dist/aos.css";

const FooterMenuDiv = ({ title, menuItems }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-up" className="FootersingleGrid">
      <span className="footerTitle">{title}</span>
      <ul className="footerUI grid">
        {menuItems.map((item, index) => (
          <li className="footerLI" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuDiv;
