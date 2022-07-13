import "./App.css";
import ProfileAvatar from "./components/avatar";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { Center, Container, Text, Box, Divider } from "@chakra-ui/react";

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
        <Contact></Contact>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
