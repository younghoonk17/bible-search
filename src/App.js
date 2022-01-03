import React, {useState} from 'react';
import './App.css';

function App() {

  const [searchString, setSearchString] = useState("");
  const [apiResult, setApiResult] = useState("");

  const handleSubmit = (event) => { 
    console.log(searchString);
    setApiResult(searchString);
    setSearchString("");
    event.preventDefault();
  }

   return (
    <div className="App">
      <header className="App-header">
      <h3>Bible Search 1.0</h3>

      <form onSubmit={handleSubmit}>
          <label>
            Search for a verse?
          </label>
          <br></br>
          <input
            id="new-todo"
            type="text"
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
          />
          <button>
            Search
          </button>
      </form>

      {apiResult ? <ul><li>{apiResult}</li></ul> : null}
    
      </header>
    </div>
   )
}

export default App;
