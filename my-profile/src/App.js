import "./App.css";
import ProfileAvatar from "./components/avatar";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import {
  Center,
  Container,
  Text,
  Box,
  Divider,
  Flex,
  Badge,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex direction="row">
        <Container
          className="main-container"
          align="right"
          w="33%"
          h="500px"
          padding="5%"
        >
          <Box
            w="100%"
            h="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor=" #d7ccc8"
          >
            <Center
              flexDirection="column"
              padding="10%"
              alignItems="flex-start"
            >
              <Text fontSize="xl">Nicole MacLean </Text>
              <Divider />
              <Text fontSize="sm">Full Stack Developer.</Text>
              {/* <Text fontSize="md">Come take a look at my work.</Text> */}
            </Center>
            <ProfileAvatar />
          </Box>
          <Contact></Contact>
          <br />
          <Container
            w="100%"
            h="max-content"
            display="flex"
            justifyContent="space-evenly"
            backgroundColor=" #d7ccc8"
            flexDirection="column"
          >
            <Center
              flexDirection="column"
              padding="5%"
              alignItems="flex-start"
              backgroundColor=" #d7ccc8"
            >
              <Text fontSize="xl">Contact </Text>
              <Divider />
              <Text fontSize="sm">Send me an email directly.</Text>
              {/* <Text fontSize="md">Come take a look at my work.</Text> */}
            </Center>

            <Email></Email>
          </Container>
        </Container>
        <Container w="33%%">
          <Projects />
        </Container>
        <br />
      </Flex>
    </div>
  );
}

export default App;
