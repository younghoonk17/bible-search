import React from 'react';
import './App.css';
import { SearchComponent } from './Components/SearchComponent';
import { SearchHymnComponent } from './Components/SearchHymnComponent';

function App() {

   return (
    <div className="App">
      <header className="App-header">
      <div className='main-title'>
        <h1>Bible Search 1.0 </h1>
        <div className='main-title-yh'>by yh</div>
      </div>

      <div className='main'>
        <SearchComponent/>
        <SearchHymnComponent/>
      </div>
   
      </header>
    </div>
   )
}

export default App;
