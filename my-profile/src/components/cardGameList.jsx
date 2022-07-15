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
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameContext } from "../providers/cardProvider";
import { useState } from "react";

const CardList = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cardShow, newGame, handleCardClick, checkFlipped, cards, game } =
    useContext(gameContext);

  const handleNewGame = () => {
    setDrawerOpen(true);
    newGame();
  };
  const handleClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <Box className="card-game-box">
        <Button
          onClick={handleNewGame}
          colorScheme="brand.900"
          variant="outline"
          size="sm"
        >
          {" "}
          New Game
        </Button>

        {game ? (
          <Drawer onClose={handleClose} isOpen={drawerOpen} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Card Game</DrawerHeader>
              <DrawerBody>
                <Grid
                  className="card-game"
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={16}
                  borderRadius={10}
                  padding={5}
                >
                  {cards.map((card) => {
                    return (
                      <Grid item md={4} key={card.id}>
                        <Box>
                          <FontAwesomeIcon
                            key={card}
                            isinactive={"false"}
                            isflipped={checkFlipped(card.id)}
                            icon={cardShow(card.id, card.icon)}
                            padding={2}
                            onClick={(event) =>
                              handleCardClick(event, card.id, card.icon)
                            }
                          />
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : null}
      </Box>
    </>
  );
};

export default CardList;
