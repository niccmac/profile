import { useState } from "react";
import {
  Container,
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
    color: "brand.800",
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
      text: `This is a project management app. It took two weeks to create as a group during my Web Development diploma at Lighthouse Labs. Focal has plenty of exciting features to explore, take a look at the video below to have a full walkthrough of them all.`,
      link: "https://www.focal-project.ca/",
      accordian: (
        <video className="project-video" width="auto" height="auto" controls>
          <source src="focal_pres_original.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      sid: 3,
      project: "Square Life",
      text: "Right now, I'm working on a GitHub gamification-inspired tracking app. Currently, I'm learning how to use sequilise to set up the database! So far it's named Square Life. If you have ANY better suggestions please let me know! The idea is a daily log of certain tasks. The more you do that task the more pronounced the square for that day becomes!",
      link: "https://github.com/niccmac/squareLife",
      accordian: <Image src="slwireframe.png" alt="Wireframe" />,
    },

    {
      sid: 4,
      project: "Memory Game",
      text: "This was a fun little memory card game I created to learn more about React. Turning the cards and keeping track of matched cards helped me learn useContext and gave me another chance to work on using providers. Managing the state was complex at first, and makes me truly appreciate the hard work that goes into even the simple of features!",
      link: "https://github.com/niccmac/calculator/tree/main/src/components",
      accordian: (
        <GameProvider>
          <CardGame></CardGame>
        </GameProvider>
      ),
    },
    {
      sid: 5,
      project: "Maps",
      text: "This project allows a user to create lists of their favourite spots. It uses Node, Postgres, JQuery, EJS and an external API for maps.",
      link: "https://github.com/ralphunrau/maps_midterm",
      accordian: <Image src="ezgif.com-gif-maker.gif" alt="mapsgif" />,
    },
    {
      sid: 6,
      project: "Scheduler",
      text: "This was a great project where I first learnt to use React. Its an app where users can book, edit and cancel appointments. It uses Express REST API routes and a Postgres backend. SPA.",
      link: "https://github.com/niccmac/scheduler",
      accordian: <Image src="schedulerGIF.gif" alt="mapsgif" />,
    },
    {
      sid: 7,
      project: "Tweeter",
      text: "This was a great project where I first learnt to use React. Its an app where users can book, edit and cancel appointments. It uses Express REST API routes and a Postgres backend. SPA.",
      link: "https://github.com/niccmac/scheduler",
      accordian: <Image src="tweeterGIF.gif" alt="mapsgif" />,
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
    <div className="projects">
      <Container>
        <Flex bg="transparent">
          <Flex overflow="scroll" pos="relative" className="project-box">
            <Flex h="full" w="full" {...carouselStyle}>
              <Box boxSize="full" flex="none" align="center" padding={4}>
                <Container
                  // paddingTop={10}
                  flexDirection="column"
                  align="left"
                  backgroundColor="brand.600"
                  h="95%"
                  w="80%"
                  m={10}
                  style={{
                    boxShadow: "10px 10px  #2D4739",
                  }}
                >
                  {/* <Text color="brand.800" fontSize="xs" p="8px 12px">
                    {1} / {slidesCount + 1} */}
                  {/* </Text> */}
                  <Text fontSize="3xl" w="100%">
                    Projects
                  </Text>
                  <Divider />
                  <Text fontSize="sm">What I'm working on.</Text>
                </Container>
              </Box>
              {slides.map((slide) => (
                <Box
                  key={`slide-${slide.sid}`}
                  boxSize="full"
                  flex="none"
                  padding={4}
                >
                  {/* <Text color="brand.800" fontSize="xs" p="8px 12px">
                    {slide.sid} / {slidesCount + 1}
                  </Text> */}

                  <Container
                    flexDirection="column"
                    align="left"
                    // margin={1}
                    backgroundColor="brand.600"
                    h="95%"
                    w="80%"
                    m={10}
                    style={{
                      boxShadow: "10px 10px  #2D4739",
                    }}
                  >
                    <Container
                      paddingTop={10}
                      flexDirection="column"
                      align="left"
                      margin={1}
                      backgroundColor="brand.600"
                      h="50%"
                      w="80%"
                      m={10}
                    >
                      <Text fontSize="3xl" w="100%">
                        <a href={slide.link} target="	_blank">
                          {slide.project}
                        </a>
                      </Text>
                      <Divider />
                      <Text fontSize="sm"> {slide.text}</Text>
                    </Container>

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
          </Flex>
        </Flex>
      </Container>
      <Container w="full">
        <HStack justifyContent="center" margin={4}>
          {Array.from({
            length: slidesCount + 1,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "brand.900" : "brand.800"}
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
      </Container>
    </div>
  );
}
