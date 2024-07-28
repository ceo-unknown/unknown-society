import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Stack,
} from "react-bootstrap";
import { myTheme } from "../_components/Themes/myTheme";
import ProfileCard from "../_components/Cards/ProfileCard/ProfileCard";

const Post = () => {
  return (
    <>
      <Container className="px-0">
        <Row className="px-0">
          <Col xs={0} md={4} lg={5} className="d-none d-md-block">
            <ProfileCard />
          </Col>
          <Col xs={12} md={8} lg={7}>
            <div className="d-flex justify-content-center align-items-center my-2 ">
              <Card
                className="text-bg-dark py-3 w-100"
                //   style={{ background: myTheme.primaryBgColor }}
              >
                <CardHeader>
                  <FormLabel>add a post</FormLabel>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="form-group mb-3">
                      <FormLabel>file :</FormLabel>
                      <FormControl type="file" className="text-bg-secondary" />
                    </div>
                    <div className="form-group mb-3">
                      <FormLabel>#tags :</FormLabel>
                      <FormControl
                        type="text"
                        className="text-bg-secondary bg-opacity-50"
                        placeholder="#tags "
                      />
                    </div>
                    <Stack
                      direction="horizontal"
                      className="justify-content-end"
                    >
                      <Button
                        className="border-0"
                        style={{ background: myTheme.primaryBgColor }}
                      >
                        post
                      </Button>
                    </Stack>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Post;
