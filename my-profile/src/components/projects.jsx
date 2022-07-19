import { useState } from "react";
import {
  Accordion,
  Container,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Divider,
  Text,
  Image,
  Center,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import GameProvider from "../providers/cardProvider";
import CardGame from "./cardGame";

export default function Projects() {
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
      sid: 2,
      project: "Focal",
      text: "This is project management app, a group project that I worked on during my diploma in Web Development at Lighthouse Labs and was created in two weeks. Focal has plenty of exciting features to explore, take a look at the video below to have a full walkthrough of all of them.",
      link: "https://www.focal-project.ca/",
      accordian: (
        <video className="project-video" width="auto" height="auto">
          <source src="focal_pres_original.mp4" controls type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      sid: 3,
      project: "Square Life",
      text: "Right now, I'm working on a GitHub gamification inspired tracking app. Currently I'm learning how to use sequilise to set up the database! So far it's named Square Life. If you have ANY better suggestions for names please send me an email! The idea is just to log, using coloured squares, how much you do of a certain task. Such as drinking water - the more cups you drink the darker your square for that day becomes! Here is a link to the repo",
      link: "https://github.com/niccmac/squareLife",
      accordian: <Image src="slwireframe.png" alt="Wireframe" />,
    },

    {
      sid: 4,
      project: "Memory Game",
      text: "This was a fun little memory card game I created to learn more about React. Turning the cards and keeping track of matched cards helped me learn useContext and gave me another chance to work on using providers. Managing the useState was complex at first, and makes me truly appreciate the hard work that goes into even the simplist of features!",
      link: "https://github.com/niccmac/calculator/tree/main/src/components",
      accordian: (
        <GameProvider>
          <CardGame></CardGame>
        </GameProvider>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount + 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex bg="transparent" h="100%" w="100%">
      <Flex
        overflow="hidden"
        pos="relative"
        h="100%"
        w="100%"
        className="project-box"
      >
        <Flex h="full" w="full" {...carouselStyle}>
          <Box key={`slide-1`} boxSize="full" flex="none">
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
              overflow="scroll"
              // h="max-content"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              backgroundColor="brand.600"
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
          {slides.map((slide) => (
            <Box
              key={`slide-${slide.sid}`}
              boxSize="full"
              flex="none"
              backgroundColor="brand.600"
            >
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {slide.sid} / {slidesCount + 1}
              </Text>

              <Container
                w="100%"
                overflow="scroll"
                h="100%"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                backgroundColor=""
                flexDirection="column"
              >
                <Text fontSize="xl" as="ins">
                  <a href={slide.link} target="	_blank">
                    {slide.project}
                  </a>{" "}
                </Text>

                <Text align="start" marginLeft="10%" marginRight="10%">
                  <Divider />
                  {slide.text}
                </Text>

                {slide.accordian}
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
