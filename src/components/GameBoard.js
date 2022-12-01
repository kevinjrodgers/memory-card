import React from "react";
import PlaySection from "./PlaySection";
import '../styles/GameBoard.css';

function GameBoard() {
    return (
        <div>
            <section className="scoring-section"> 
                <p>Current Score: </p>
                <p>Best Score: </p>
            </section>
            <PlaySection/>
        </div>
    );
}

export default GameBoard;
