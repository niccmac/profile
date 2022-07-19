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
        h="min-content"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        padding={5}
      >
        <GridItem colSpan={1} bg="transparent">
          <Profile></Profile>
        </GridItem>

        <GridItem colSpan={4} bg="transparent">
          <Projects></Projects>
        </GridItem>
        <GridItem
          colSpan={5}
          h="fit-content"
          bg="tomato"
          padding={4}
          backgroundColor="brand.600"
        >
          <Skills></Skills>
        </GridItem>
        <GridItem>
          <Email></Email>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
