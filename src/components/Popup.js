import {checkWin} from '../helpers/helpers'
import {useEffect} from 'react'

const Popup = ({correctLetters, wrongLetters, selectedWord, SetPlayable, playAgain}) => {
  let finalMessage ='';
  let finalMessageWord  = '';
  let playable = true;

if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
  finalMessage = 'Congrats, you won!';
  playable = false;
} else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
  finalMessage = 'unfortunately you lost';
  finalMessageWord = `... the word was ${selectedWord}`
  playable = false;
}

useEffect(() => SetPlayable(playable))

  return (
        <div className="popup-container" style={finalMessage != '' ? {display: 'flex'}: {}}>
      <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageWord}</h3>
        <button onClick={playAgain} >One more time</button>
      </div>
    </div>
    )
}

export default Popup
