import React from "react";
import "../styles/GameTile.css";

function GameTile(props) {
    /*let tileStyle = {
        //backgroundImage: {backgroundImage: 'url(' + props.characterObj.fileName + ');'
        //backgroundImage: {backgroundImage: 'require(' + props.characterObj.fileName + ');'
    }}; */

    return(
        <div className="game-tile" onClick={() => props.adjustScore(props.id)}>
            {/*<img className="game-character-image" width="130px" height="150px" src={require('../images/luigi.png')}/>*/}
            <img className="game-character-image" src={require('../images/' + props.characterImageSrc)}/>
            <p className="game-character-nameplate">{props.characterName}</p>
        </div>
    );
}

export default GameTile;
