import React, { useState, useEffect} from "react";
import GameTile from "./GameTile";
import "../styles/PlaySection.css"
function PlaySection(props) {
    const [board, setBoard] = useState(populateCharacterArray());

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
        characterArray[1] = createTile("Mario", "mario.png");
        characterArray[2] = createTile("Bowser", "bowser.png");
        characterArray[3] = createTile("Peach", "peachv3.png");
        characterArray[4] = createTile("Bow", "bowv3.png");
        characterArray[5] = createTile("Vivian", "vivian.png");
        characterArray[6] = createTile("Koops", "koops.png");
        characterArray[7] = createTile("Goombario", "goombario.png");
        characterArray[8] = createTile("Goombella", "goombella.png");
        //characterArray[9] = createTile("Ms. Mowz", "msmowz.png");
        characterArray[9] = createTile("Admiral Bobbery", "admiralbobbery.png");
        characterArray.sort((a, b) => a.sortingNum > b.sortingNum);
        return characterArray;  
    }

    function adjustScore(componentID) {
        // Check if clicked div has been clicked before
        // If yes, game over, reset score
        // If no, increase score
        // If current score > best score, increase best score
        for(let boardIncrement=0; boardIncrement<board.length; boardIncrement++) {
            if(board[boardIncrement].id === componentID) {
                if(board[boardIncrement].hasBeenClicked === true) {
                    // Game Over
                    props.setCurrScore(0);
                    resetGame();
                } else {
                    board[boardIncrement].hasBeenClicked = true;
                    let newCurrScore = props.currScore + 1;
                    props.setCurrScore(newCurrScore);
                    if(newCurrScore >= props.bestScore) {
                        props.setBestScore(newCurrScore);
                    }
                }
            }
        }
        randomizeGameTiles();
    }

    function resetGame() {
        props.setCurrScore(0);
        let newBoard = [...board];
        for(let boardIncrement = 0; boardIncrement<newBoard.length; boardIncrement++) {
            newBoard[boardIncrement].hasBeenClicked = false;
        }
        setBoard(newBoard);

        //setBoard(populateCharacterArray());
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
        <GameTile key={character.id} id={character.id} characterName={character.characterName} adjustScore={adjustScore} randomizeGameTiles={randomizeGameTiles} hasBeenClicked={character.hasBeenClicked} characterImageSrc={character.fileName}/>
    ));
    return(
        <div className="play-section">
            {gameTileMap}
        </div>
    );
}

// To do: update score paragraphs X
// Reset game on game overs ~
// Add more images 
// Fix the update scorer (on console log, it's always 1 point behind) X


export default PlaySection;