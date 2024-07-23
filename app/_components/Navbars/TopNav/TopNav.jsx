import { Navbar } from "react-bootstrap";

import styles from "./topNav.module.css";

// import brandImg from "../../../public/assets/";

const TopNav = () => {
  return (
    <>
      <Navbar className={`${styles.navBg} mb-2 rounded-bottom sticky-top`}>
        <div className="mx-2 text-center">
          <span className={`${styles.navBrandUnknown} h4 `}>
            Unknown Society
          </span>
        </div>
      </Navbar>
    </>
  );
};

export default TopNav;
