import "./App.css";

import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import Skills from "./components/skills";
import Profile from "./profile";

import {
  Center,
  Text,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Link,
  Image,
  Flex,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Profile />
      <Flex
        padding={4}
        minWidth="max-content"
        alignItems="center"
        flexDirection="column"
        marginBottom="200px"
      >
        <Projects />
        <Skills />
      </Flex>

      <Contact />
    </div>
  );
}

export default App;
