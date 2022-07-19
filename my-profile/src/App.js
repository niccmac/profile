import "./App.css";

import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import Skills from "./components/skills";

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
import { FaFacebookF } from "react-icons/fa";
import Profile from "./profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Box>{/* <Projects /> */}</Box>

      <Contact />
    </div>
  );
}

export default App;
