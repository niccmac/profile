import { Button, Grid, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";
import { gameContext } from "../providers/cardProvider";

const CardList = () => {
  const { cardShow, newGame, handleCardClick, checkFlipped, cards, game } =
    useContext(gameContext);

  return (
    <Box className="card-game-box">
      <Button onClick={newGame}> New Game</Button>
      {game ? (
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
      ) : null}
    </Box>
  );
};

export default CardList;
