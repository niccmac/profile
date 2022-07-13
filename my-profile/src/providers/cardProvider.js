import { v4 as uuidv4 } from "uuid";
import { useContext, useState, createContext } from "react";
// import {
//   faCoffee,
//   faGhost,
//   faBinoculars,
//   faFrog,
//   faHotdog,
//   faSocks,
//   faWorm,
//   faSkullCrossbones,
//   faDiamond,
// } from "@fortawesome/free-solid-svg-icons";
import { Button, Alert, AlertTitle } from "@chakra-ui/react";
// const icons = [
//   { icon: faCoffee },
//   { icon: faGhost },
//   { icon: faBinoculars },
//   { icon: faFrog },
//   { icon: faHotdog },
//   { icon: faSocks },
//   { icon: faWorm },
//   { icon: faSkullCrossbones },
// ];
export const gameContext = createContext();

export default function GameProvider(props) {
  // const [game, setGame] = useState(false);
  // const [cards, setCards] = useState([]);
  // const [match, setMatched] = useState([]);
  // const [flipped, setFlipped] = useState([]);
  // const [matchIcons, setMatchIcons] = useState([]);
  // const [turns, setTurns] = useState(0);
  // // Shuffles Cards
  // const generateGame = () => {
  //   const shuffledIcons = [...icons, ...icons]
  //     .sort(() => Math.random() - 0.5)
  //     .map((card) => ({ ...card, id: uuidv4() }));
  //   setCards(shuffledIcons);
  // };
  // // Checks state to see if card is flipped
  // const checkFlipped = (cardID) => {
  //   if (flipped[0] === cardID || flipped[1] === cardID) {
  //     return "true";
  //   }
  //   return "false";
  // };
  // // Checks how many cards are flipped, if > 2 resets and flips new card
  // const handleCardClick = (event, cardID, cardIcon) => {
  //   if (flipped.length === 1) {
  //     setFlipped((prev) => [...prev, cardID]);
  //     setMatchIcons((prev) => [...prev, cardIcon]);
  //     setTurns((turns) => turns + 1);
  //   } else {
  //     // If two cards are already open, close and flip new card
  //     setFlipped([cardID]);
  //     setMatchIcons([cardIcon]);
  //   }
  // };
  // // Show Icons or diamond depending on card status (flipped/matched)
  // const cardShow = (cardID, cardIcon) => {
  //   if (flipped.includes(cardID)) {
  //     return cardIcon;
  //   } else {
  //     for (let i = 0; i < match.length; i++) {
  //       if (match[i] === cardID) {
  //         return cardIcon;
  //       }
  //     }
  //     return faDiamond;
  //   }
  // };
  // // New Game and reset state
  // const newGame = () => {
  //   setGame(true);
  //   setMatched([]);
  //   setFlipped([]);
  //   setMatchIcons([]);
  //   setTurns(0);
  //   generateGame();
  // };
  // const exportValues = {
  //   cardShow,
  //   newGame,
  //   handleCardClick,
  //   generateGame,
  //   checkFlipped,
  //   cards,
  //   setCards,
  //   match,
  //   setMatched,
  //   flipped,
  //   setFlipped,
  //   matchIcons,
  //   setMatchIcons,
  //   turns,
  //   setTurns,
  //   game,
  //   setGame,
  // };
  // // Check match
  // if (matchIcons.length === 2) {
  //   if (matchIcons[0].iconName === matchIcons[1].iconName) {
  //     setMatched((prev) => [...prev, flipped[0], flipped[1]]);
  //     setFlipped([]);
  //     setMatchIcons([]);
  //   }
  // }
  // // Check win
  // if (match.length === 16) {
  //   return (
  //     <div>
  //       <Button onClick={newGame}> New Game</Button>
  //       <Alert severity="success">
  //         <AlertTitle>YOU WON!!!</AlertTitle> It took {turns} turns to win...
  //       </Alert>
  //     </div>
  //   );
  // }
  // return (
  //   <gameContext.Provider value={exportValues}>
  //     {props.children}
  //   </gameContext.Provider>
  // );
}
export const useGame = () => useContext(gameContext);
