import React, { useState } from "react";
import "./SearchHymnComponent.css";


export function SearchHymnComponent(props) {
  const [searchString, setSearchString] = useState("");
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");

  const submit = (event) => {

    let result = findHymn(searchString);

    setTitle(result.title);

    // let combinedVerse = combineVerse(result.verses);

    let cleanedVerse = cleanVerses(result.verses);

    setVerse(cleanedVerse);
    
    event.preventDefault();
  };

  return (
    <div>
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

      {title ? <div className="result">
        <div className="result-title">{title} </div>
        <div className="result-verse">{verse} </div>
      </div> : null }

    </div>
  );
}

function findHymn(searchString) {
  console.log(`Looking for hymn: ${searchString}`);
  return require(`../Objects/Hymn/${searchString}.json`);
}

function combineVerse(verses) {
  return verses;
}

function cleanVerses(verses) {
  let versesString = JSON.stringify(verses, null, ' ');
  let versesWithLineBreak = versesString.replace(/,/g, '\n');
  let versesWithoutBracket1 = versesWithLineBreak.replace("{", "");
  let versesWithoutBracket2 = versesWithoutBracket1.replace("}", "");
  let versesWithoutQuotes = versesWithoutBracket2.replace(/["']/g, "");

  return versesWithoutQuotes;
}