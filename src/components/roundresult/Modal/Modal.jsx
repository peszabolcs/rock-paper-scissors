import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  action,
  computerPoints,
  playerPoints,
  rLoserItem,
  rMainText,
  rWinnerItem,
  resetGame,
  roundNumber,
} from "../RoundResult";
import "./Modal.css";

const ModalFunct = ({ closeModal }) => {
  useEffect(() => {
    ColorChange(rMainText);
  }, [rMainText]);
  if (computerPoints < 5 && playerPoints < 5) {
    return (
      <Modal
        className="modal-main"
        show={true}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton={false} className="modal-header">
          <Modal.Title className="modal-title text-center">
            {rMainText}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p id="roundNumber">Round: {roundNumber}</p>
          <p>Current standing:</p>
          <p className="standings">
            <span id="playerPoints">Player: {playerPoints}/5</span>
          </p>
          <p className="standings">
            <span id="computerPoints">Computer: {computerPoints}/5</span>
          </p>
          <div id="actionTextDiv">
            <p className="actionText">
              <FullActionText />
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" size="lg" onClick={closeModal}>
            Next Round
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (playerPoints >= 5) {
    return (
      <Modal
        className="modal-main"
        show={true}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton={false} className="modal-header">
          <Modal.Title className="modal-title text-center">
            <p>Victory!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p id="roundNumber">Congrats, You defeated the computer!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            size="lg"
            onClick={() => {
              closeModal();
              resetGame(0);
            }}
          >
            New Game
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (computerPoints >= 5) {
    return (
      <Modal
        className="modal-main"
        show={true}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton={false} className="modal-header">
          <Modal.Title className="modal-title text-center">
            <p>Defeat!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p id="roundNumber">Better luck next time.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            size="lg"
            onClick={() => {
              closeModal();
              resetGame(0);
            }}
          >
            New Game
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

function ColorChange(rMainText) {
  const modalContent = document.querySelector(".modal-content");
  if (rMainText === "You Won!") {
    modalContent.style.backgroundColor = "#216869";
  } else if (rMainText === "You Lost!") {
    modalContent.style.backgroundColor = "#f06543";
  } else {
    modalContent.style.backgroundColor = "#8ea4d2";
  }
}

function FullActionText() {
  if (rMainText === "You Won!") {
    return (
      <>
        <span id="playerPoints">{rWinnerItem}</span> {action}
        <span id="computerPoints"> {rLoserItem}.</span>
      </>
    );
  } else if (rMainText === "You Lost!") {
    return (
      <>
        <span id="computerPoints">{rWinnerItem}</span> {action}
        <span id="playerPoints"> {rLoserItem}.</span>
      </>
    );
  }
}

export { ModalFunct, ColorChange, FullActionText };
