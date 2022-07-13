import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Input, Button, Textarea, Stack, Tooltip } from "@chakra-ui/react";
// TODO get tool tip working
export default function Email() {
  const form = useRef();

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Stack direction="column" spacing={4} align="center">
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
        <Tooltip
          label="Send your message to my email address - nicole.mac0404@gmail.com"
          bg="brand.900"
          placement="right-start"
          width="100%"
        >
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
        </Tooltip>
      </Stack>
    </form>
  );
}
