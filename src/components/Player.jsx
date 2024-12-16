import { useState } from 'react'
import './Player.css'
function Player(props){
   let[playerName,setPlayerName]=useState(props.Name);
    let[isEditing,setIsEditing]=useState(false);
    
    function handleChange(event){
       setPlayerName(event.target.value);
    }

    function handleClick(){
       if(isEditing===true){
        props.setPlayer(playerName);
        setIsEditing(false)
       }
       else{
        setIsEditing(true)
       }
    }

    function handleKey(event){
        if(event.key=="Enter"){
            props.setPlayer(playerName);
            setIsEditing(false);
        }
     }

    let editablePlayerName=<span className='player-name'>{playerName}</span>
    if(isEditing===true){
        editablePlayerName=
       <input type="text" required value={playerName} onChange={handleChange} onKeyDown={handleKey}/>
    }

    return(
        <div className="Player-container">
            {editablePlayerName}
            <span>{props.icon}</span>
            <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
        </div>
    )
}
export default Player;