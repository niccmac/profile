import { Box } from "@chakra-ui/react";
import { FaGitSquare, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <Box
      w="100%"
      h="25%"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor=" #d7ccc8"
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
        {/* <MdInsertDriveFile size="40" /> */}
        <FaRegFileAlt size="40" />
      </a>

      <a href="https://www.linkedin.com/in/nicole-maclean/" target="blank">
        <MdEmail size="45" />
      </a>
    </Box>
  );
}
