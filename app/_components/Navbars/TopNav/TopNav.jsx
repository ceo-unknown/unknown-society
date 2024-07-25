import { Navbar } from "react-bootstrap";

import styles from "./topNav.module.css";

// import brandImg from "../../../public/assets/";

const TopNav = () => {
  return (
    <>
      <Navbar
        className={`${styles.navBg} mb-2 rounded-bottom sticky-top d-none d-lg-block`}
      >
        <h4 className={`text-center mx-auto fw-bold`}>Unknown Society</h4>
      </Navbar>
    </>
  );
};

export default TopNav;
