import React, { useState } from "react";
import "./SearchHymnComponent.css";

export function SearchHymnComponent(props) {
  const [searchString, setSearchString] = useState("");
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");

  const submit = (event) => {
    let result = findHymn(searchString);

    setTitle(result.title);

    setVerse(Object.entries(result.verses));

    event.preventDefault();
  };

  return (
    <div>
      <div className="verseForm">
        <form onSubmit={submit}>
          <label>Search for a Hymn?</label>
          <br></br>
          <div className="group-button">
          <input
            className="button"
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Any number between 1-645"
          />
          <button
          className="search-button">SEARCH</button>
          </div>
        </form>
      </div>
      {title ? (
        <div className="result">
          <div className="result-title">{title} </div>
          <br></br>
          <div className="result-verse">
            {verse && verse.map((item) => <div>{item} </div>)}{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function findHymn(searchString) {
  console.log(`Looking for hymn: ${searchString}`);
  return require(`../Objects/Hymn/${searchString}.json`);
}
