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
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      {title ? (
        <div className="result">
          <div className="result-title">{title} </div>
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
