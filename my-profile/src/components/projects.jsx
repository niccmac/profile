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
  Flex,
  HStack,
} from "@chakra-ui/react";
import GameProvider from "../providers/cardProvider";
import CardGame from "./cardGame";

export default function Projects() {
  // return (
  //   <>
  //     <br />
  //     <Center
  //       flexDirection="column"
  //       padding="5%"
  //       alignItems="flex-start"
  //       backgroundColor=" #d7ccc8"
  //     >
  //       <Text fontSize="xl">Projects </Text>
  //       <Divider />
  //       <Text fontSize="sm">Current projects.</Text>
  //       {/* <Text fontSize="md">Come take a look at my work.</Text> */}
  //     </Center>

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      project: "Focal",
      text: "This is project management app, a group project that I worked on during my diploma in Web Development at Lighthouse Labs and was created in two weeks. Focal has plenty of exciting features to explore, take a look at the video below to have a full walkthrough of all of them.",
      link: "https://www.focal-project.ca/",
      accordian: (
        <AccordionPanel>
          <Box alignContent="center">
            <video className="project-video" width="auto" height="auto">
              <source src="focal_pres_original.mp4" controls type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </AccordionPanel>
      ),
    },
    {
      project: "Square Life",
      text: "Right now, I'm working on a GitHub gamification inspired tracking app. Currently I'm learning how to use sequilise to set up the database! So far it's named Square Life. If you have ANY better suggestions for names please send me an email! The idea is just to log, using coloured squares, how much you do of a certain task. Such as drinking water - the more cups you drink the darker your square for that day becomes! Here is a link to the repo",
      link: "https://github.com/niccmac/squareLife",
      accordian: (
        <AccordionPanel>
          {" "}
          <Text align="start" marginLeft="4%" marginRight="4%">
            {" "}
          </Text>
          <Image src="slwireframe.png" alt="Wireframe" />{" "}
        </AccordionPanel>
      ),
    },
    {
      project: "Card Game",
      text: "This was a fun little memory card game I created to learn more about React. Turning the cards and keeping track of matched cards helped me learn useContext and gave me another chance to work on using providers. Managing the useState was complex at first, and makes me truly appreciate the hard work that goes into even the simplist of features!",
      link: "https://github.com/niccmac/calculator/tree/main/src/components",
      accordian: (
        <AccordionPanel>
          <Text align="start" marginLeft="4%" marginRight="4%"></Text>
          <GameProvider>
            <CardGame />
          </GameProvider>
        </AccordionPanel>
      ),
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="full"
      bg="transparent"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          <Box key={`slide-one`} boxSize="full" shadow="md" flex="none">
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
            >
              {1} / {slidesCount + 1}
            </Text>

            <Container
              w="100%"
              h="100%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              backgroundColor=" #d7ccc8"
              flexDirection="column"
            >
              <Center
                flexDirection="column"
                padding="5%"
                alignItems="flex-start"
                backgroundColor=" #d7ccc8"
              >
                <Text fontSize="xl">Projects </Text>
                <Divider />
                <Text fontSize="sm">What I'm working on.</Text>
              </Center>
            </Container>
          </Box>
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid + 1}`}
              boxSize="full"
              shadow="md"
              flex="none"
            >
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 2} / {slidesCount + 1}
              </Text>

              <Container
                w="100%"
                h="100%"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                backgroundColor=" #d7ccc8"
                flexDirection="column"
              >
                <Text fontSize="xl">
                  <a href={slide.link} target="	_blank">
                    {slide.project}
                  </a>{" "}
                </Text>
                {/* <Badge
                  variant="outline"
                  colorScheme="brand.900"
                  alignSelf="flex-start"
                  size="xs"
                  marginLeft="4%"
                  marginTop="2%"
                ></Badge> */}
                <Text align="start" marginLeft="10%" marginRight="10%">
                  {slide.text}
                </Text>
                <a href={slide.link} target="	_blank">
                  <u>{slide.project}</u>
                </a>
                <Accordion
                  allowToggle
                  h="25%"
                  borderColor="transparent"
                  marginLeft="4%"
                  marginRight="4%"
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Text fontSize="sm">More</Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {slide.accordian}
                  </AccordionItem>
                </Accordion>
              </Container>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount + 1,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "white" : "white"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
