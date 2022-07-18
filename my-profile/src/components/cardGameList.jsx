import {
  Button,
  Grid,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  GridItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameContext } from "../providers/cardProvider";
import { useState } from "react";
import { useEffect } from "react";

const CardList = () => {
  const [opened, setOpened] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cardShow, newGame, handleCardClick, checkFlipped, cards, game } =
    useContext(gameContext);

  // const handleNewGame = () => {
  //   console.log(opened);
  //   setOpened(true);
  //   console.log(opened);

  //   // console.log(isOpen);

  //   // onOpen();
  //   // if (opened) {
  //   newGame(opened);
  //   // }
  //   // console.log(isOpen);
  // };

  // const handleClose = () => {
  //   // console.log(isOpen);
  //   // onClose();
  //   // console.log(isOpen);
  //   console.log(opened);
  //   setOpened(false);
  //   console.log(opened);
  // };
  return (
    <>
      <Box className="card-game-box" w="100%">
        <Button onClick={newGame}>New Game</Button>

        <Grid
          className="card-game"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          // spacing={{ xs: 2, md: 3 }}
          // columns={16}
          // borderRadius={10}
          // padding={5}
        >
          {cards.map((card) => {
            return (
              <GridItem md={4} key={card.id}>
                <Box>
                  <FontAwesomeIcon
                    key={card}
                    colSpan={2}
                    isinactive={"false"}
                    isflipped={checkFlipped(card.id)}
                    icon={cardShow(card.id, card.icon)}
                    padding={2}
                    onClick={(event) =>
                      handleCardClick(event, card.id, card.icon)
                    }
                  />
                </Box>
              </GridItem>
            );
          })}
        </Grid>
        {/* </DrawerBody>
          </DrawerContent>
        </Drawer> */}
        {/* ) : null} */}
      </Box>
    </>
  );
};

export default CardList;
