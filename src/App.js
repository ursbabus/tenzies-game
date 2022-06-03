import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Die from './Die';

function App() {
  const [dice, setDice] = useState(allNewDice());
  function allNewDice(){
    let newDice = [];
    for(let i=0; i<10; i++){
      newDice.push({
        value: Math.ceil(Math.random()*6), 
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice;
  }
  console.log(allNewDice())
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />);
  function rollDice(){
    setDice(allNewDice())
  }
  return (
   <main>
     <div className='dice-container'>
       {diceElements}
     </div>
     <button className="roll-btn" onClick={rollDice}>Roll</button>
   </main>
  );
}

export default App;
