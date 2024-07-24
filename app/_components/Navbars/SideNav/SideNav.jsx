import { Card, CardBody, Container, Stack } from "react-bootstrap";
import { BsChatLeft, BsHouseDoor, BsPerson } from "react-icons/bs";
import styles from "./sideNav.module.css";
import Link from "next/link";
const SideNav = () => {
  return (
    <>
      <Container
        className={` ${styles.sideNavContainer} px-0 d-none d-lg-block mx-2`}
      >
        <Card className={`text-bg-dark border h-100`}>
          <CardBody>
            <Stack className={`align-items-center h-100`}>
              <div>
                <Link href={"/chats"} className="nav-link">
                  <BsHouseDoor size={25} className={`mb-3`} />
                </Link>
              </div>
              <div>
                <Link href={"/chats"} className="nav-link">
                  <BsChatLeft size={25} className={`mb-3`} />
                </Link>
              </div>
              <div className="d-flex h-100 flex-column align-items-center justify-content-end">
                <BsPerson size={25} className={``} />
              </div>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default SideNav;
