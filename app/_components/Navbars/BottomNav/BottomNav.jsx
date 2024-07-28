import { Card, CardBody, Container, Stack } from "react-bootstrap";
import {
  BsChatLeft,
  BsHouseDoor,
  BsPerson,
  BsPlusCircle,
  BsSearch,
} from "react-icons/bs";
import styles from "./bottomNav.module.css";
import Link from "next/link";
import { myTheme } from "../../Themes/myTheme";
const BottomNav = () => {
  return (
    <>
      <Container className="d-lg-none fixed-bottom mb-2">
        <Card
          className={`text-light  rounded-pill`}
          style={{ background: myTheme.rgbaPrimary }}
        >
          <CardBody>
            <Stack
              className={` justify-content-between align-items-center`}
              direction="horizontal"
            >
              <div>
                <Link href={"/"} className="nav-link">
                  <BsHouseDoor size={25} />
                </Link>
              </div>
              <div>
                <Link href={"/explore"} className="nav-link">
                  <BsSearch size={25} />
                </Link>
              </div>
              <div>
                <Link href={"/post"} className="nav-link">
                  <BsPlusCircle size={25} />
                </Link>
              </div>
              <div>
                <Link href={"/profile"} className="nav-link">
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
