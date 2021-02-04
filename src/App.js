import {useState} from 'react'

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


  return (
    <>
      <Header />
      <div className="main-container">
        <Figure />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      
    </>
  );
}

export default App;
