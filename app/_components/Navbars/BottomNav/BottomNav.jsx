import { Card, CardBody, Container, Stack } from "react-bootstrap";
import { BsChatLeft, BsHouseDoor, BsPerson } from "react-icons/bs";
import styles from "./bottomNav.module.css";
import Link from "next/link";
const BottomNav = () => {
  return (
    <>
      <Container className="d-lg-none fixed-bottom mb-2">
        <Card
          className={`text-light ${styles.bottomCardContainer} rounded-pill`}
        >
          <CardBody>
            <Stack
              className={` justify-content-between align-items-center`}
              direction="horizontal"
            >
              <div>
                <Link href={"/chats"} className="nav-link">
                  <BsHouseDoor size={25} />
                </Link>
              </div>
              <div>
                <Link href={"/chats"} className="nav-link">
                  <BsChatLeft size={25} />
                </Link>
              </div>
              <div>
                <Link href={"/chats"} className="nav-link">
                  <BsPerson size={25} />
                </Link>
              </div>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default BottomNav;
