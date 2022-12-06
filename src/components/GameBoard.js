import {React, useState} from "react";
import PlaySection from "./PlaySection";
import '../styles/GameBoard.css';

function GameBoard() {
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div>
            <section className="scoring-section"> 
                <p>Current Score: {currScore}</p>
                <p>Best Score: {bestScore}</p>
            </section>
            <PlaySection currScore={currScore} setCurrScore={setCurrScore} bestScore={bestScore} setBestScore={setBestScore}/>
        </div>
    );
}

export default GameBoard;
