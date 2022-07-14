import { useState } from "react";
import {
  Accordion,
  Container,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Badge,
  Divider,
  Text,
  Stack,
  Image,
  Center,
  Box,
} from "@chakra-ui/react";
import GameProvider from "../providers/cardProvider";
import CardGame from "./cardGame";

export default function Projects() {
  return (
    <>
      <br />

      <Center
        flexDirection="column"
        padding="5%"
        alignItems="flex-start"
        backgroundColor=" #d7ccc8"
      >
        <Text fontSize="xl">Projects </Text>
        <Divider />
        <Text fontSize="sm">Current projects.</Text>
        {/* <Text fontSize="md">Come take a look at my work.</Text> */}
      </Center>

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
          marginLeft="4%"
          marginTop="2%"
          marginBottom="2%"
        >
          <a href="https://www.focal-project.ca/" target="	_blank">
            Focal
          </a>
        </Badge>

        <Text align="start" marginLeft="4%" marginRight="4%" marginBottom="2%">
          This is project management app. There is a link right here to see the
          &nbsp;
          <a href="https://www.focal-project.ca/" target="	_blank">
            <u>Focal Project Website</u>
          </a>
          .
        </Text>

        <Accordion
          allowToggle
          h="max-content"
          borderColor="transparent"
          marginLeft="4%"
          marginRight="4%"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text fontSize="sm">Project Walkthrough Video</Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Box alignContent="center">
                <br />
                <Text align="center" marginLeft="4%" marginRight="4%">
                  This is a group project that I worked on during my diploma in
                  Web Development at Lighthouse Labs and was created in two
                  weeks. Focal has plenty of exciting features to explore, take
                  a look at the video below to have a full walkthrough of all of
                  them.
                </Text>
                <br />
                <video className="project-video" width="auto" height="auto">
                  <source
                    src="focal_pres_original.mp4"
                    controls
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>

      <Stack direction="row" h="150px" p={4} backgroundColor=" #d7ccc8">
        <Divider orientation="vertical" color="transparent" />
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
          marginLeft="4%"
          marginBottom="2%"
        >
          Square Life
        </Badge>
        <Text align="start" marginLeft="4%" marginRight="4%" marginBottom="2%">
          Right now, I'm working on a GitHub gamification inspired tracking app.
          Currently I'm learning how to use sequilise to set up the database!
          Here is a link to the repo{" "}
          <a href="https://github.com/niccmac/squareLife" target="	_blank">
            <u>SquareLife</u>
          </a>
        </Text>
        <Accordion
          allowToggle
          h="max-content"
          borderColor="transparent"
          marginLeft="4%"
          marginRight="4%"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text fontSize="sm">Wireframe</Text>

                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text align="start" marginLeft="4%" marginRight="4%">
                So far it's named Square Life. If you have ANY better
                suggestions for names please send me an email! The idea is just
                to log, using coloured squares, how much you do of a certain
                task. Such as drinking water - the more cups you drink the
                darker your square for that day becomes!
              </Text>
              <Image src="slwireframe.png" alt="Wireframe" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      <Stack direction="row" h="150px" p={4} backgroundColor=" #d7ccc8">
        <Divider orientation="vertical" color="transparent" />
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
          marginLeft="4%"
          marginBottom="2%"
        >
          Card Game
        </Badge>
        <Text align="start" marginLeft="4%" marginRight="4%">
          This was a fun little memory card game I created to learn more about
          React. Turning the cards and keeping track of matched cards helped me
          learn useContext and gave me another chance to work on using
          providers. Managing the useState was complex at first, and makes me
          truly appreciate the hard work that goes into even the simplist of
          features!
        </Text>

        <Accordion
          allowToggle
          h="max-content"
          borderColor="transparent"
          marginLeft="4%"
          marginRight="4%"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text fontSize="sm">Play Memory Game</Text>

                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <GameProvider>{/* <CardGame></CardGame> */}</GameProvider>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      <Stack direction="row" h="150px" p={4} backgroundColor=" #d7ccc8">
        <Divider orientation="vertical" color="transparent" />
      </Stack>
    </>
  );
}
