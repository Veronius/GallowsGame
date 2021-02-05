import {useState, useEffect} from 'react'

import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Popup from './components/Popup'
import Notification from './components/Notification'
import './App.css';
import {showNotification as show} from './helpers/helpers'

const words = ['minsk', 'forest', 'lake', 'swamp', 'raven'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

  const [playable, SetPlayable] = useState(true);
  const [correctLetters, SetCorrectLetters] = useState([])
  const [wrongLetters, SetWrongLetters] = useState([])
  const [showNotification, SetShowNotification] = useState(false)

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              SetCorrectLetters(currentLetters => [...currentLetters, letter])

            } else {
              show(SetShowNotification)
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              SetWrongLetters(wrongLetters => [...wrongLetters, letter])
            } else {
              show(SetShowNotification)
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)

  }, [correctLetters, wrongLetters, playable])

  function playAgain() {
    SetPlayable(true);

    SetCorrectLetters([]);
    SetWrongLetters([])

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random]
  }

  return (
    <>
      <Header />
      <div className="main-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        
      </div>
      <Popup wrongLetters={wrongLetters} correctLetters={correctLetters} selectedWord={selectedWord} SetPlayable={SetPlayable} playAgain={playAgain} />
        <Notification showNotification={showNotification} />
      
    </>
  );
}

export default App;
