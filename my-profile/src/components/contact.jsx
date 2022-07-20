import {
  Box,
  AlertDialog,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  Button,
  AlertDialogBody,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaGitSquare, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";

// TODO alert to notification

import { MdEmail } from "react-icons/md";

export default function Contact() {
  const toast = useToast();
  // Clipboards email
  function copy() {
    var copyText = "nicole.mac0404@gmail.com";
    navigator.clipboard.writeText(copyText);

    toast({
      title: "Copied.",
      description: "Email copied to clipboard.",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  }
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="brand.600"
        padding={4}
      >
        <a href="https://github.com/niccmac" target="blank">
          <FaGitSquare size="45" />
        </a>
        <a href="https://www.linkedin.com/in/nicole-maclean/" target="blank">
          <FaLinkedin size="45" />
        </a>
        <a
          href="https://www.cakeresume.com/s--JTk4kmJ9lt80lFKgKeCDZg--/nicole-maclean"
          target="blank"
        >
          <FaRegFileAlt size="40" />
        </a>

        <MdEmail size="45" onClick={copy} />
      </Box>
    </div>
  );
}
