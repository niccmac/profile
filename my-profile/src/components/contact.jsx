import { Box, AlertDialog, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { FaGitSquare, FaLinkedin, FaRegFileAlt } from "react-icons/fa";

// TODO alert to notification

import { MdEmail } from "react-icons/md";
import AlertDialogExample from "./alert";
export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  // Clipboards email
  function copy() {
    var copyText = "nicole.mac0404@gmail.com";
    navigator.clipboard.writeText(copyText);
    onOpen();
  }
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor=" #d7ccc8"
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogExample></AlertDialogExample>
      </AlertDialog>
    </>
  );
}
