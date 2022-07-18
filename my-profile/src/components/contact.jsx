import { Box } from "@chakra-ui/react";
import { FaGitSquare, FaLinkedin, FaRegFileAlt } from "react-icons/fa";

// TODO alert to notification

import { MdEmail } from "react-icons/md";
export default function Contact() {
  function copy() {
    var copyText = "nicole.mac0404@gmail.com";
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
  }
  return (
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
  );
}
