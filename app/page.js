import PostCard from "./_components/Cards/PostCard/PostCard";
import ProfileCard from "./_components/Cards/ProfileCard/ProfileCard";
import TrendsCard from "./_components/Cards/Trends/TrendsCard";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <Container className={`px-0 my-2 ${styles.mainContainer}`}>
      <Row>
        <Col xs={0} lg={3} className="d-none d-lg-block">
          <ProfileCard />
        </Col>
        <Col
          xs={12}
          lg={6}
          className="border border-top-0 border-bottom-0 border-secondary"
        >
          <PostCard />
        </Col>
        <Col xs={0} lg={3}>
          <TrendsCard />
        </Col>
      </Row>
    </Container>
  );
}
