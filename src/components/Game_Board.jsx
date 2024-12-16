import { useEffect, useState } from 'react';
import './Game_Board.css'
import { isEditable } from '@testing-library/user-event/dist/utils';
import Player from './Player';
function Game_Board(props){
    
    let[GameBoard,setGameBoard]=useState([
            [null,null,null],
            [null,null,null],
            [null,null,null]
       ]);

    let[turn,setTurn]=useState("X");
    let[winner,setWinner]=useState(false);
    let[winnerSymbol,setWinnerSymbol]=useState(null);
    let[conclusion,setConclusion]=useState(null);
    let gameResult=null;

    function handleClick(event,row_idx,col_idx){
        
       if(GameBoard[row_idx][col_idx]==null && winner!=true){
        
       let NewGameboard = [...GameBoard];
       NewGameboard[row_idx][col_idx]=(turn=="X")?"X":"O";
       setGameBoard(NewGameboard)
       

        event.target.innerText=turn;
        turn=="X"?setTurn("O"):setTurn("X")

        checkWinner();
        }
       
    }

    function checkWinner(){
        //row
        for(let i=0;i<3;i++){
            if(GameBoard[i][0]==GameBoard[i][1] && GameBoard[i][1]==GameBoard[i][2] && GameBoard[i][0]!=null){
                setWinner(true);
                setWinnerSymbol(GameBoard[i][0]);
        }
      }

        //column
        for(let j=0;j<3;j++){
            if(GameBoard[0][j]==GameBoard[1][j] && GameBoard[1][j]==GameBoard[2][j] && GameBoard[0][j]!=null){
            setWinner(true);
            setWinnerSymbol(GameBoard[0][j]);
        }
      }

       //diagonal
        if(GameBoard[0][0]==GameBoard[1][1] && GameBoard[1][1]==GameBoard[2][2] && GameBoard[0][0]!=null){
            setWinner(true);
            setWinnerSymbol(GameBoard[0][0]);
        }
        else if(GameBoard[0][2]==GameBoard[1][1] && GameBoard[1][1]==GameBoard[2][0] && GameBoard[0][2]!=null){
            setWinner(true);
            setWinnerSymbol(GameBoard[0][2]);
        }

      //draw
        let bulb=false;
        GameBoard.map((row)=>{
            row.map((element)=>{
                if(element==null){
                bulb=true;
                }
            })
        })
        if(bulb==false && winner==false){
            setConclusion("Draw");
        }
    }


    let gameWinner;
    if(winner==true){
        if(winnerSymbol=="X"){
            gameWinner=props.player1;
       }
       else if(winnerSymbol=="O"){
            gameWinner=props.player2;
       }
        gameResult=<span id='winnerSpan'>Winner is {gameWinner}</span>
    }
    else{
        if(conclusion=="Draw"){
        gameResult=<span id='winnerSpan'>There is a Draw</span>
        }
    }

    useEffect(()=>{
        console.log(GameBoard)
    },[GameBoard]);

    function handleReset(){
        setGameBoard([
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]);
        if(winner==true){
            setWinner(false);
        }
        if(conclusion=="Draw"){
            setConclusion(false);
        }
            setTurn("X");
    }

    return(
        <div className="game-board">
            <div id='winner_Name'>
            {gameResult}
            </div>
            {
                GameBoard.map((row,row_idx)=>{
                    return <div className='row' key={row_idx}>
                        {
                            row.map((element,col_idx)=>{
                                return <button className='btn' key={col_idx} onClick={(event)=>{handleClick(event,row_idx,col_idx)}}>{element}</button>
                            })
                        }
                    </div>
                })
            }
            <div className='reset'>
                <button id='reset' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
export default Game_Board;












{/* <div className="row">
                <button onClick={handleClick} className='btn'></button>
                <button onClick={handleClick} className='btn'></button>
                <button onClick={handleClick} className='btn'></button>
            </div>
            <div className="row">
                <button onClick={handleClick} className='btn'></button>
                <button onClick={handleClick} className='btn'></button>
                <button onClick={handleClick} className='btn'></button>
            </div>
            <div className="row">
                <button onClick={handleClick} className='btn'></button>
                <button onClick={handleClick} className='btn'></button>
                <button onClick={handleClick} className='btn'></button>
            </div> */}