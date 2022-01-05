import React, { useState } from "react";
import "./SearchVerse.css";
import * as searchService from "../Services/VerseService";


export function SearchVerse(props) {
  const [searchString, setSearchString] = useState("");
  const [apiResult, setApiResult] = useState("");

  const handleSubmit = (event) => {
    console.log(searchString);
    setApiResult(searchString);
    setSearchString("");
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search for a verse?</label>
        <br></br>
        <input
          id="new-todo"
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button>Search</button>
      </form>

      <button onClick={searchService.fetchVerseTest}>PUSH</button>

      {apiResult ? <div className="apiResult">{apiResult}</div> : null}
    </div>
  );
}
