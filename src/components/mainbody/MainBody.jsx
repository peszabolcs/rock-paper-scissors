import "./MainBody.css";
import RoundResult from "../roundresult/RoundResult";
import React, { useState } from "react";
import ModalFunct from "../roundresult/Modal/Modal";

function MainBody() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (playerValue) => {
    RoundResult(playerValue);
    setModalVisible(true);
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
              onClick={() => handleImageClick(1)}
            />
          </div>
          <div className="fighters">
            <img
              src="./pics/paper.png"
              id="paper"
              alt="paper"
              onClick={() => handleImageClick(2)}
            />
          </div>
          <div className="fighters">
            <img
              src="./pics/scissors.png"
              id="scissors"
              alt="scissors"
              onClick={() => handleImageClick(3)}
            />
          </div>
        </div>
      </div>
      {/* Conditionally render ModalFunct */}
      {modalVisible && <ModalFunct />}
    </>
  );
}

export default MainBody;
