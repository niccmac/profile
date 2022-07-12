import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function Footer() {
  const items = [
    {
      title: "Focal Project",
      link: "https://www.focal-project.ca/",
      link2: "focal_pres_original.mp4",
      icon: "AiFillProject",
      text: "This is a group project that I worked on during my diploma in Web Development at Lighthouse Labs. This project management app was created in to weeks and has plenty of exciting features to explore!",
    },
  ];

  return (
    <>
      <Accordion allowToggle w="100%" h="80%" backgroundColor=" #d7ccc8">
        {items.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <a href={item.link} target="	_blank">
                  {item.title}
                </a>
                {item.link2 ? (
                  <video width="320" height="240" controls>
                    <source
                      src="focal_pres_original.mp4"
                      controls
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
                <p>{item.text}</p>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
