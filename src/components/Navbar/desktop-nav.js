import { RiArrowDownSLine } from "react-icons/ri";

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

export const NavElements = ({ border } = { border: "" }) => (
  <ul>
    <li>Explore</li>
    <li>About Us</li>
    <li>
      Cities
      <RiArrowDownSLine />
    </li>
    <li className={"call-us " + border}>Call Us</li>
  </ul>
);
