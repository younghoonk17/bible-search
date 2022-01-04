import React from 'react';
import './App.css';
import { SearchVerse } from './Components/searchVerse';

function App() {

   return (
    <div className="App">
      <header className="App-header">
      <h3>Bible Search 1.0</h3>

      <SearchVerse/>
    
      </header>
    </div>
   )
}

export default App;
