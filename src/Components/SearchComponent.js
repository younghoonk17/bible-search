import React, { useState } from "react";
import "./SearchComponent.css";
import * as searchService from "../Services/VerseService";
import { BibleDict } from "../Objects/BibleDict";


export function SearchComponent(props) {
  const [searchString, setSearchString] = useState("");
  const [apiResult, setApiResult] = useState(""); 
  const [verse, setVerse] = useState(1);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("test");

  const submit = (event) => {
    const numbers = extractNumbers(searchString);
    const book = extractBook(searchString);

    console.log("english: ", traslateBook(book));

    console.log("Searching for", book, numbers[0], numbers[1]);
    searchService.fetchVerseTest(book, numbers[0], numbers[1], setApiResult);
    
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

function extractBook( searchString) {
  const regularExpression = /[\u3131-\uD79D]+/ugi;
  return searchString.match(regularExpression);
}

function extractNumbers( searchString) {
  const regularExpression = /\d+/g;
  return searchString.match(regularExpression);
}

function traslateBook( book) {
  return BibleDict[book];
}
