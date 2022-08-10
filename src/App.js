import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [puzzle, setPuzzle] = useState('');
  const [word, setWord] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [result, setResult] = useState('');
  let counter = 30;

  const onChangeWord = (event) => {
    let text = event.target.value;
    if (text == undefined || text == null) return;
    setWord(text);
    validate(text);
  };

  const validate = (text) => {
    if (puzzle == word) {
      setResult('Congratulation!!!');
      // setScore((i) => setScore(i + 1));
    } else {
      setResult(`Game Over. You scored ${score}!!!`);
      setScore(0);
    }
  };

  useEffect(() => {
    // setInterval(() => {
    //   console.log('helo');
    //   // counter = counter - 1;
    //   // setTimer(counter);
    // }, 1000);
  }, []);

  return (
    <div>
      <h1>Word Bumble!</h1>

      <p> Score: {score} </p>

      <p>
        Timer: {timer} <i>seconds remaining</i>
      </p>

      <p>Guess the word and score points.</p>

      <input type="text" value={word} onChange={onChangeWord} />
    </div>
  );
}
