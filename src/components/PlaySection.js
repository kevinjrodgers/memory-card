import React, { useState, useEffect} from "react";
import GameTile from "./GameTile";
import "../styles/PlaySection.css"
function PlaySection() {
    const [board, setBoard] = useState(populateCharacterArray());
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function createTile(characterName, fileName) {
        let tileObject = {
            id: Math.floor(Math.random() * 10000) + 1, // Random number between 1 and 10000
            sortingNum: Math.floor(Math.random() * 10000) + 1,
            characterName, characterName,
            fileName: fileName,
            hasBeenClicked: false,
        };
        return tileObject;
    }

    function populateCharacterArray() {
        const characterArray = [];
        characterArray[0] = createTile("Luigi", "luigi.png");
        characterArray[1] = createTile("Mario", "luigi.png");
        characterArray[2] = createTile("Bowser", "luigi.png");
        characterArray[3] = createTile("Peach", "luigi.png");
        characterArray[4] = createTile("Toad", "luigi.png");
        characterArray[5] = createTile("Yoshi", "luigi.png");
        characterArray[6] = createTile("Koopa Kid", "luigi.png");
        characterArray[7] = createTile("Chain Chomp", "luigi.png");
        return characterArray;  
    }

    function adjustScore(componentID) {
        // Check if clicked div has been clicked before
        // If yes, game over, reset score
        // If no, increase score
        // If current score > best score, increase best score
        for(let boardIncrement=0; boardIncrement<board.length; boardIncrement++) {
            if(board[boardIncrement.id] === componentID) {
                if(board[boardIncrement].hasBeenClicked === true) {
                    // Game Over
                    setCurrScore(0);
                } else {
                    board[boardIncrement].hasBeenClicked = true;
                    setCurrScore(currScore + 1);
                    //if(currScore > bestScore) {
                    //    setBestScore(currScore);
                    //}
                }
            }
            
        }
    }

    function randomizeGameTiles() {
        let newBoard = [...board];
        for(let boardIncrement = 0; boardIncrement<newBoard.length; boardIncrement++) {
            newBoard[boardIncrement].sortingNum = Math.floor(Math.random() * 10000) + 1;
        }
        newBoard.sort((a, b) => a.sortingNum > b.sortingNum);
        setBoard(newBoard);
    }

    const gameTileMap = board.map((character) => (
        <GameTile key={character.id} characterName={character.characterName} randomizeGameTiles={randomizeGameTiles} hasBeenClicked={character.hasBeenClicked} characterImageSrc={character.fileName}/>
    ));
    return(
        <div className="play-section">
            {gameTileMap}
        </div>
    );
}

export default PlaySection;