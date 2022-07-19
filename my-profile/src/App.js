import "./App.css";

import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import Skills from "./components/skills";

import { Center, Text, Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import Profile from "./profile";

function App() {
  return (
    <div className="App">
      <Grid
        margin={20}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        columns={2}
        spacingX="40px"
        spacingY="20px"
        paddingBottom={10}
      >
        <Box aria-colspan={1}>
          <Profile></Profile>
        </Box>
        <Box aria-colspan={1}></Box>
        <Box aria-colspan={1}></Box>

        <Box aria-colspan={1}>
          <Projects></Projects>
        </Box>
        <Divider paddingTop={10} paddingBottom={10} />
        <Divider paddingTop={10} paddingBottom={10} />

        <Box h="600px" marginTop={10} aria-colspan={2}>
          <Skills h="200px"></Skills>
        </Box>
        <Box h="200px" aria-colspan={2}>
          <Email h="200px"></Email>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
