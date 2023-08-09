import React, { useState } from "react";
import "./MainBody.css";
import RoundResult, { rMainText } from "../roundresult/RoundResult";
import { ModalFunct, ColorChange } from "../roundresult/Modal/Modal";

function MainBody() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="bodyContainer">
        <h1 className="choose">Choose your fighter!</h1>
        <div className="fighterContainer">
          <div className="fighters">
            <img
              src="./pics/rock.png"
              id="rock"
              alt="Rock"
              onClick={() => {
                RoundResult(1);
                openModal();
                ColorChange(rMainText);
              }}
            />
          </div>
          <div className="fighters">
            <img
              src="./pics/paper.png"
              id="paper"
              alt="paper"
              onClick={() => {
                RoundResult(2);
                openModal();
                ColorChange(rMainText);
              }}
            />
          </div>
          <div className="fighters">
            <img
              src="./pics/scissors.png"
              id="scissors"
              alt="scissors"
              onClick={() => {
                RoundResult(3);
                openModal();
                ColorChange(rMainText);
              }}
            />
          </div>
        </div>
      </div>
      {showModal && <ModalFunct closeModal={() => setShowModal(false)} />}
    </>
  );
}

export default MainBody;
