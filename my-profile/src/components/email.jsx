import React, { useRef } from "react";
import Contact from "./contact";
import emailjs from "emailjs-com";
import {
  Input,
  Button,
  Textarea,
  Stack,
  Tooltip,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
// Send button colours
// TODO get tool tip working. Appears after alert
export default function Email() {
  const form = useRef();
  const [visible, setVisable] = useState(false);
  const title = "Email sent!";
  const message = "I'll get back to you as soon as possible!";

  if (visible) {
    setTimeout(() => {
      setVisable(false);
    }, 3000);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ll4uldf",
        "template_5y7ujur",
        form.current,
        "HZXpU8rFzP1qacpqK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setVisable(true);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {visible ? (
        <Alert
          colorScheme="brand.900"
          color="#d7ccc8"
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {title}
          </AlertTitle>
          <AlertDescription maxWidth="sm">{message}</AlertDescription>
        </Alert>
      ) : null}
      <Container bg="brand.600">
        <form ref={form} onSubmit={sendEmail}>
          <Stack direction="column" spacing={4} align="center" padding="10%">
            <Input
              placeholder="Your name"
              color="brand.900"
              colorScheme="brand.900"
              focusBorderColor="brand.900"
              errorBorderColor="red.500"
              isRequired
              name="name"
            />
            <Input
              placeholder="Your email"
              colorScheme="brand.900"
              focusBorderColor="brand.900"
              errorBorderColor="red.500"
              isRequired
              name="email"
            />
            <Textarea
              placeholder="Write your message here!"
              colorScheme="brand.900"
              focusBorderColor="brand.900"
              errorBorderColor="red.500"
              isRequired
              name="message"
            />
            {/* <Tooltip
            label="Send your message to my email address - nicole.mac0404@gmail.com"
            bg="brand.900"
            placement="right-start"
            width="100%"
          > */}
            <span>
              <Button
                colorScheme="brand.900"
                variant="outline"
                type="submit"
                value="Submit"
                size="sm"
              >
                Send!
              </Button>
            </span>
            <Contact></Contact>
            {/* </Tooltip> */}
          </Stack>
        </form>
      </Container>
    </>
  );
}
