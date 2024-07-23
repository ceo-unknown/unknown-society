import { Card, CardBody, Container, Stack } from "react-bootstrap";
import { BsChatLeft, BsHouseDoor, BsPerson } from "react-icons/bs";
import styles from "./bottomNav.module.css";
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
                <BsHouseDoor size={25} />
              </div>
              <div>
                <BsChatLeft size={25} />
              </div>
              <div>
                <BsPerson size={25} />
              </div>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default BottomNav;
