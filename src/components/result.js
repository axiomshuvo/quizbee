import React from "react";

const Result= ({score,playAgain}) => (
    <div className="score-board" >
        <div className="score" >You Scored {score}/5 correct answers!</div>
        <div className="playBtn" onClick={playAgain} >Play Again!</div>
    </div>
)

export default Result;