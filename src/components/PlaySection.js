import React, { useState, useEffect} from "react";
import GameTile from "./GameTile";
import "../styles/PlaySection.css"
function PlaySection() {
    const [board, setBoard] = useState(populateCharacterArray());

    function createTile(characterName, fileName) {
        let tileObject = {
            id: Math.floor(Math.random() * 10000) + 1, // Random number between 1 and 10000
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

    function randomizeGameTiles() {
        let newBoard = populateCharacterArray();
        for(let boardIncrement = 0; boardIncrement<newBoard.length; boardIncrement++) {
            newBoard[boardIncrement].id = Math.floor(Math.random() * 10000) + 1;
        }
        newBoard.sort((a, b) => a.id - b.id);
        setBoard(newBoard);
        console.log(board);
    }

    const tileArray = populateCharacterArray();
    console.log(tileArray);
    const gameTileMap = tileArray.map((character) => ( // Might need to change to board
        <GameTile key={character.id} characterName={character.characterName} onClick={randomizeGameTiles} characterImageSrc={character.fileName}/>
    ));
    return(
        <div className="play-section">
            {gameTileMap}
        </div>
    );
}

export default PlaySection;