import React from 'react';
import './App.css';
import { SearchComponent } from './Components/SearchComponent';
import { SearchHymnComponent } from './Components/SearchHymnComponent';

function App() {

   return (
    <div className="App">
      <header className="App-header">
      <h3>Bible Search 1.0</h3>

      <div className='main'>
        <SearchComponent/>
        <SearchHymnComponent/>
      </div>
   
      </header>
    </div>
   )
}

export default App;
