import { NavElements } from "../../components/Navbar/desktop-nav";
import { scrollInto } from "../../components/Mid/index";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <div className="logo logo-footer" onClick={scrollInto("logo")}>
          <div></div>
        </div>
        <div className="company-rights">
          <span>&copy; 2021 Company Name</span>
          <span>All rights reserved</span>
        </div>
      </div>
      <div className="navbar-nav">
        <NavElements border="border" />
      </div>
    </footer>
  );
};

export default Footer;
