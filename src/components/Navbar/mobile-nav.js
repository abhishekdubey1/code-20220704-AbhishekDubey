import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { NavElements } from "./desktop-nav";

export default () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((s) => !s);
  return (
    <nav>
      <ul className="navbar navbar-mobile">
        <li className="logo">
          <div></div>
        </li>
        <div>
          {open ? (
            <CgCloseO size="36px" color="white" onClick={toggle} />
          ) : (
            <svg
              onClick={toggle}
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42857 6.78572H38.5714C39.3604 6.78572 40 6.14616 40 5.35715V1.78572C40 0.996701 39.3604 0.357147 38.5714 0.357147H1.42857C0.639554 0.357147 0 0.996701 0 1.78572V5.35715C0 6.14616 0.639554 6.78572 1.42857 6.78572ZM1.42857 21.0714H38.5714C39.3604 21.0714 40 20.4319 40 19.6429V16.0714C40 15.2824 39.3604 14.6429 38.5714 14.6429H1.42857C0.639554 14.6429 0 15.2824 0 16.0714V19.6429C0 20.4319 0.639554 21.0714 1.42857 21.0714ZM1.42857 35.3571H38.5714C39.3604 35.3571 40 34.7176 40 33.9286V30.3571C40 29.5681 39.3604 28.9286 38.5714 28.9286H1.42857C0.639554 28.9286 0 29.5681 0 30.3571V33.9286C0 34.7176 0.639554 35.3571 1.42857 35.3571Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        {open && <NavElements border="border-white" />}
      </ul>
    </nav>
  );
};
