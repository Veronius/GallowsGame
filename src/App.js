import {useState, useEffect} from 'react'

import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import './App.css';


const words = ['minsk', 'forest', 'lake', 'swamp', 'raven'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

  const [playable, SetPlayable] = useState(true);
  const [correctLetters, SetCorrectLetters] = useState([])
  const [wrongLetters, SetWrongLetters] = useState([])

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              SetCorrectLetters(currentLetters => [...currentLetters, letter])

            } else {
              // showNotification();
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              SetWrongLetters(wrongLetters => [...wrongLetters, letter])
            } else {
              // showNotification();
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)

  }, [correctLetters, wrongLetters, playable])

  return (
    <>
      <Header />
      <div className="main-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      
    </>
  );
}

export default App;
