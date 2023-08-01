import "./MainBody.css";

function MainBody() {
  return (
    <>
      <div className="bodyContainer">
        <h1 className="choose">Choose your fighter!</h1>
        <div className="fighterContainer">
          <div className="fighters">
            <img
              src="./public/pics/rock.png"
              id="rock"
              alt="Rock"
              // onClick={RoundResult}
            />
          </div>
          <div className="fighters">
            <img
              src="./public/pics/paper.png"
              id="paper"
              alt="paper"
              // onClick={RoundResult}
            />
          </div>
          <div className="fighters">
            <img
              src="./public/pics/scissors.png"
              id="scissors"
              alt="scissors"
              // onClick={RoundResult}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBody;
