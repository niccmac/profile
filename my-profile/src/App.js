import "./App.css";
import ProfileAvatar from "./components/avatar";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import Skills from "./components/skills";

import { Center, Text, Box, Divider, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Grid
        h="min-content"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        padding={5}
      >
        <GridItem colSpan={1} bg="transparent">
          <Box backgroundColor=" #d7ccc8" padding={4}>
            <Center flexDirection="column">
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
              <Text fontSize="xs" as="em">
                "There is no royal road to anything, one thing at a time, all
                things in succession. That which grows fast, withers as rapidly.
                That which grows slowly, endures."
              </Text>
              <Text fontSize="xs">- Josiah Gilbert Hollandd</Text>
            </Center>
            <br />
            <br />
            <br />
            <br />
            <Box>
              <Contact></Contact>
            </Box>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box backgroundColor=" #d7ccc8" padding={4}>
            <Center flexDirection="column">
              <Text fontSize="xl">Contact </Text>
              <Divider />
              <Text fontSize="sm">Send me an email directly.</Text>
            </Center>

            <Email></Email>
          </Box>
        </GridItem>

        <GridItem colSpan={4} bg="papayawhip" backgroundColor=" #d7ccc8">
          <Projects></Projects>
        </GridItem>
        <GridItem
          colSpan={6}
          bg="tomato"
          padding={4}
          backgroundColor=" #d7ccc8"
          display="flex"
        >
          <Skills></Skills>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
