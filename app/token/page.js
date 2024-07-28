"use client";
import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Stack,
} from "react-bootstrap";

const page = () => {
  const createToken = () => {};

  return (
    <>
      <Container
        className={`d-flex  justify-content-center align-items-center`}
        style={{ height: "90vh" }}
      >
        <Card className="my-3 w-full text-bg-dark">
          <CardBody>
            <Stack gap={2} direction="vertical">
              <Image
                src="https://img.freepik.com/free-vector/hand-drawn-cardano-illustration_23-2149213702.jpg?w=996&t=st=1722183633~exp=1722184233~hmac=f25aa5728c8ef058faef0baa3bb0cae4aa9823f8e46ddfbdd3a3ea1965ab9d4c"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                }}
                className="rounded mx-auto my-3"
              />
              <Button onClick={createToken}>Take a Token</Button>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default page;
