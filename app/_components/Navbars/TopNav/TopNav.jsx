import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

import styles from "./topNav.module.css";
import Link from "next/link";
import { BsChat, BsHouse, BsPerson, BsSearch } from "react-icons/bs";

const TopNav = () => {
  return (
    <>
      <Navbar
        className="text-bg-primary
        rounded bg-opacity-50 "
      >
        <Container>
          <NavbarBrand className="fw-bold text-light text-uppercase ">
            Unknown Society
          </NavbarBrand>
          <Container className="d-flex justify-content-around">
            <Link className="nav-link" href={"/"}>
              <BsHouse color="white" size={24} />
            </Link>
            <Link className="nav-link" href={"/"}>
              <BsSearch color="white" size={24} />
            </Link>
            {/* <Link className="nav-link" href={"/"}>
              <BsChat color="white" size={24} />
            </Link> */}
            <Link className="nav-link" href={"/"}>
              <BsPerson color="white" size={24} />
            </Link>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
