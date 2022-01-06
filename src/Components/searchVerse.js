import React, { useState } from "react";
import "./SearchVerse.css";
import * as searchService from "../Services/VerseService";


export function SearchVerse(props) {
  const [searchString, setSearchString] = useState("");
  const [apiResult, setApiResult] = useState("");

  const submit = (event) => {
    searchService.fetchVerseTest(searchString, setApiResult);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submit}>
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

        {apiResult ? <div className="apiResult">{apiResult}</div> : null}

    </div>
  );
}
