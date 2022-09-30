
import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState('')
  const [resultUpper, setUpper] = useState('')
  const [resultLower, setLower] = useState('')
  
  function count(e){
    e.preventDefault()
    const resultUpper = (220-age) * 0.85
    setUpper(resultUpper)
    const resultLower = (220-age) * 0.65
    setLower(resultLower)
  }

  return (
    <div className="App">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={count}>
        <div>
          <label>Age</label>
          <input value={age} onChange ={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{resultUpper} - {resultLower}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
