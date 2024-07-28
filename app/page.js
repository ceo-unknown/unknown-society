import PostCard from "./_components/Cards/PostCard/PostCard";
import ProfileCard from "./_components/Cards/ProfileCard/ProfileCard";
import TrendsCard from "./_components/Cards/Trends/TrendsCard";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <Container className={`px-0 ${styles.mainContainer}`}>
      <Row>
        <Col xs={0} md={4} lg={4} className="d-none d-md-block d-lg-block ">
          <ProfileCard />
        </Col>
        <Col xs={12} md={8} lg={4} className="px-0">
          <PostCard />
        </Col>
        <Col xs={0} lg={4} className="d-none d-md-block">
          <TrendsCard />
        </Col>
      </Row>
    </Container>
  );
}
