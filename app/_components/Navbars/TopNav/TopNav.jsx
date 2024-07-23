import { CardText, Navbar, NavbarBrand, Stack } from "react-bootstrap";

import styles from "./topNav.module.css";
import Image from "next/image";

// import brandImg from "../../../public/assets/";

const TopNav = () => {
  return (
    <>
      <Navbar className={`${styles.navBg} my-2`}>
        <div className="mx-2">
          <span className={`${styles.navBrandUnknown} h4`}>U</span>
          <span className={`${styles.navBrandSociety} h4`}>S</span>
        </div>
        {/* <span className={`text-uppercase mx-2 ${styles.navBrandUnknown}`}>
          unknown
          <br />
          <span className={styles.navBrandSociety}>SOCIETY</span>
        </span> */}
      </Navbar>
    </>
  );
};

export default TopNav;
