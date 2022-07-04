import { RiArrowDownSLine } from "react-icons/ri";
import { scrollInto } from "../Mid/index";

const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};

export default () => {
  return (
    <nav>
      <ul className="navbar navbar-desktop">
        <li className="logo">
          <div></div>
        </li>
        <li className="navbar-nav">
          <NavElements border="border-white" />
        </li>
      </ul>
    </nav>
  );
};

export const NavElements = ({ border, open, animate } = { border: "" }) => (
  <ul
    style={!animate ? {} : open ? mountedStyle : unmountedStyle}
    className="nav-elements"
  >
    <li onClick={scrollInto(".explore")}>Explore</li>
    <li onClick={scrollInto(".about")}>About Us</li>
    <li>
      Cities
      <RiArrowDownSLine />
    </li>
    <li className={"call-us " + border}>Call Us</li>
  </ul>
);
