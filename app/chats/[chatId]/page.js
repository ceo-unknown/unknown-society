import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  FormControl,
  Stack,
} from "react-bootstrap";
import { BsSend } from "react-icons/bs";

// export async function generateStaticParams() {
//   const chatRoomId = ChatData.map((chat) => ({
//     chatId: chat._id,
//   }));
//   return chatRoomId;
// }

export default function ChatBoxRoom({ params }) {
  // const id = params.chatId;
  // const chat = ChatData.find((chatObj) => chatObj._id === id);
  return (
    <>
      <Card className="text-bg-dark h-100 ">
        <CardHeader>Chat room</CardHeader>
        <CardBody className="">
          <Stack className=" h-75 overflow-auto">
            <Stack direction="horizontal" className="justify-content-start">
              <CardText className="text-bg-primary bg-opacity-75 px-2 rounded">
                Hello
              </CardText>
            </Stack>
            <Stack direction="horizontal" className="justify-content-end">
              <CardText className="px-2 text-bg-secondary rounded">
                hi!
              </CardText>
            </Stack>
          </Stack>

          {/* input */}
          <Stack direction="horizontal" className="h-25 align-items-end">
            <FormControl
              className="text-bg-dark "
              placeholder="enter massage"
            />
            <Button variant="secondary" className="px-2  rounded-end">
              <BsSend size={22} />
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
