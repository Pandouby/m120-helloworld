import { useState } from 'react';
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  function counterAdd(){
    setCounter(counter+1);
  }

  function counterSub(){
    setCounter(counter-1);
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello World!
        <button onClick={counterAdd}>Add</button>
        <button onClick={counterSub}>Sub</button>
        <p>{counter}</p>
      </header>
    </div>
  );
}
