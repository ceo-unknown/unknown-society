import PostCard from "./_components/Cards/PostCard/PostCard";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
export default function Home() {
  return (
    <Container className={`px-0 my-2 ${styles.mainContainer}`}>
      <PostCard />
    </Container>
  );
}
