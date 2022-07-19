import ProfileAvatar from "./components/avatar";
import Contact from "./components/contact";
import { Center, Text, Divider } from "@chakra-ui/react";
export default function Profile() {
  return (
    <>
      <Center flexDirection="column" backgroundColor="brand.600" padding={4}>
        <ProfileAvatar />

        <Text alignItems="flex-start" fontSize="xl">
          Nicole MacLean{" "}
        </Text>
        <Divider />
        <Text alignItems="flex-start" fontSize="sm">
          Full Stack Developer.
        </Text>
        <br />
        <br />
        <br />
        <br />
        {/* <Text fontSize="xs" as="em">
          "There is no royal road to anything, one thing at a time, all things
          in succession. That which grows fast, withers as rapidly. That which
          grows slowly, endures."
        </Text> */}
        {/* <Text fontSize="xs">- Josiah Gilbert Hollandd</Text> */}
        <Contact />
      </Center>
    </>
  );
}
