import ModalFunct from "./Modal/Modal";
let computerPoints = 0;
let playerPoints = 0;
let roundNumber = 0;
export let convertedPlayerValue;
export let convertedComputerValue;
export let playerWon = true;
export let rMainText;
let rWinnerItem;
let rLoserItem;
let action;

const RoundResult = (playerValue) => {
  roundNumber++;
  console.log(roundNumber);
  switch (playerValue) {
    case 1:
      convertedPlayerValue = "Rock";
      break;
    case 2:
      convertedPlayerValue = "Paper";
      break;
    case 3:
      convertedPlayerValue = "Scissors";
      break;
  }
  //testing:
  console.log("The player has choosen: " + convertedPlayerValue);
  //
  let computerValue = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (computerValue) {
    case 1:
      convertedComputerValue = "Rock";
      break;
    case 2:
      convertedComputerValue = "Paper";
      break;
    case 3:
      convertedComputerValue = "Scissors";
      break;
  }
  //testing:
  console.log("The computer has choosen: " + convertedComputerValue);
  CalcRes(computerValue, playerValue);

  return (
    <>
      <ModalFunct />
    </>
  );
};

//calculate result fuction
const CalcRes = (computerValue, playerValue) => {
  switch (computerValue) {
    case 1:
      if (playerValue === 1) {
        rMainText = "Draw!";
      } else if (playerValue === 2) {
        rMainText = "You Won!";
        rWinnerItem = convertedPlayerValue;
        rLoserItem = convertedComputerValue;
      } else {
        rMainText = "You Lost!";
        rWinnerItem = convertedComputerValue;
        rLoserItem = convertedPlayerValue;
      }
      break;
    case 2:
      if (playerValue === 1) {
        rMainText = "You Lost!";
        rWinnerItem = convertedComputerValue;
        rLoserItem = convertedPlayerValue;
      } else if (playerValue === 2) {
        rMainText = "Draw!";
      } else {
        rMainText = "You Won!";
        rWinnerItem = convertedPlayerValue;
        rLoserItem = convertedComputerValue;
      }
      break;
    case 3:
      if (playerValue === 1) {
        rMainText = "You Won!";
        rWinnerItem = convertedPlayerValue;
        rLoserItem = convertedComputerValue;
      } else if (playerValue === 2) {
        rMainText = "You Lost!";
        rWinnerItem = convertedComputerValue;
        rLoserItem = convertedPlayerValue;
      } else {
        rMainText = "Draw!";
      }
      break;
  }
  //testing
  console.log(rMainText);
  console.log(rWinnerItem);

  switch (rWinnerItem) {
    case "Rock":
      action = "smashed";
      break;
    case "Paper":
      action = "packed";
      break;
    case "Scissors":
      action = "shredded";
  }
  //testing
  console.log(action);
  console.log(rLoserItem);
};

export default RoundResult;
