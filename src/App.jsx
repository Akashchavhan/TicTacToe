import './App.css'
import logo from'./images/tic-tac-toe.gif'
import Player from './components/Player'
import Game_Board from './components/Game_Board'
import { useState } from 'react'
function App(){
   
  let [player1,setPlayer1]=useState("");
  let [player2,setPlayer2]=useState("");

    return(
        <div>
            <h1 className="Game-Heading">Tic Tac Toe Game</h1>
            <div className='img-container'>
            <img src={logo} height="75px" width="75px" alt='{logo}'/>
            </div>

            <div className='Main-section'>
            <div className='Game-container'>
              <div className='player-section'>
                <Player Name="Player1" icon="X" setPlayer={setPlayer1}/>
                <div id='symbol'>Vs</div>
                <Player Name="Player2" icon="O" setPlayer={setPlayer2}/>
              </div>
              <div className='game-section'>
                <Game_Board player1={player1} player2={player2}/>
              </div>
            </div>
            </div>

        </div>
    )
}
export  default App