import "./App.css";
import ProfileAvatar from "./components/avatar";
import Footer from "./components/footer";
import { Center, Container, Text, Box, Divider } from "@chakra-ui/react";
import { FaGitSquare, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { MdEmail, MdInsertDriveFile } from "react-icons/md";
function App() {
  return (
    <div className="App">
      {/* Nicole MacLean */}
      <Container
        className="main-container"
        align="right"
        w="1300px"
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
          <Center flexDirection="column" padding="10%" alignItems="flex-start">
            <Text fontSize="xl">Nicole MacLean </Text>
            <Divider />
            <Text fontSize="sm">Full Stack Developer.</Text>
            {/* <Text fontSize="md">Come take a look at my work.</Text> */}
          </Center>
          <ProfileAvatar />
        </Box>
        <Footer />
        <Box
          w="100%"
          h="25%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          backgroundColor=" #d7ccc8"
        >
          <a href="https://github.com/niccmac">
            <FaGitSquare size="45" />
          </a>
          <a href="https://www.linkedin.com/in/nicole-maclean/">
            <FaLinkedin size="45" />
          </a>
          <a href="https://www.cakeresume.com/s--JTk4kmJ9lt80lFKgKeCDZg--/nicole-maclean">
            {/* <MdInsertDriveFile size="40" /> */}
            <FaRegFileAlt size="40" />
          </a>

          <a href="https://www.linkedin.com/in/nicole-maclean/">
            <MdEmail size="45" />
          </a>
        </Box>
      </Container>
    </div>
  );
}

export default App;
