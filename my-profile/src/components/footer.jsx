import { useState } from "react";
import {
  Accordion,
  Container,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionItem,
  Badge,
  Divider,
  Text,
  Stack,
} from "@chakra-ui/react";
import GameProvider from "../providers/cardProvider";
import CardGame from "./cardGame";
import Email from "./email";

export default function Footer() {
  return (
    <>
      <Container
        w="100%"
        h="max-content"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor=" #d7ccc8"
        flexDirection="column"
      >
        <Badge
          variant="outline"
          colorScheme="brand.900"
          alignSelf="flex-start"
          size="lg"
        >
          Projects
        </Badge>
        <Badge
          variant="outline"
          colorScheme="brand.900"
          alignSelf="flex-start"
          size="xs"
        >
          <a href="https://www.focal-project.ca/" target="	_blank">
            Focal
          </a>
        </Badge>

        <Text align="start">
          This project management app was created in two weeks and has plenty of
          exciting features to explore. Try the Kanban Style drag and drop task
          manager where you can time how long you spend on each task, and use a
          pomodoro to make sure you're taking breaks.
        </Text>
        <br />
        <Text align="start">
          This is a group project that I worked on during my diploma in Web
          Development at Lighthouse Labs. There is a link right here to see the
          &nbsp;
          <a href="https://www.focal-project.ca/" target="	_blank">
            <u>Focal Project Website</u>
          </a>
          , or take a look at the video below to have a full walkthrough of all
          the features.
        </Text>
        <br />
        <Accordion w="100%" h="max-content">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Project Walkthrough Video
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <video className="project-video" width="320" height="240">
                <source
                  src="focal_pres_original.mp4"
                  controls
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      <Stack direction="row" h="10px" p={4} backgroundColor=" #d7ccc8">
        <Divider orientation="vertical" />
      </Stack>
      <Container
        w="100%"
        h="max-content"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor=" #d7ccc8"
        flexDirection="column"
      >
        <Badge
          variant="outline"
          colorScheme="brand.900"
          alignSelf="flex-start"
          size="xs"
        >
          Card Game
        </Badge>

        <GameProvider>{/* <CardGame></CardGame> */}</GameProvider>
      </Container>
      <Stack direction="row" h="10px" p={4} backgroundColor=" #d7ccc8">
        <Divider orientation="vertical" />
      </Stack>

      <Container
        w="100%"
        h="max-content"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor=" #d7ccc8"
        flexDirection="column"
      >
        <Badge
          variant="outline"
          colorScheme="brand.900"
          alignSelf="flex-start"
          size="xs"
        >
          Email Me
        </Badge>

        <Email></Email>
      </Container>
    </>
  );
}
