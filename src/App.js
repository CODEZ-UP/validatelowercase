import { useState } from 'react';
import './App.css';

function App() {
  const [ user, setUser ] = useState('')
  const [ error, setError ] = useState(null)
  const [ valid, setValid ] = useState(null)


  function handleChange (event) {
    const { value } = event.target
    setUser(value)
    const isLowercase = value === value.toLowerCase()
    if(isLowercase){
      setValid(value.length ? `${value} is Valid Lowercase Name` : null)
      setError(null)
    }else{
      setError('Username must be Lowercase')
      setValid(null)
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    window.alert(`${user} is Valid Lowercase Name`)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label htmlFor="userInput">Username: </label>
          <input id="userInput" type="text" value={user} onChange={handleChange} />
          <button disabled={Boolean(error) || user.length < 1} type="submit">Submit</button>
        </div>
        <div className="error">{error}</div>
        <div className="valid">{valid}</div>
      </form>
    </div>
  );
}

export default App;
