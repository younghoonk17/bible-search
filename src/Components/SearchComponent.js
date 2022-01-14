import React, { useState } from "react";
import "./SearchComponent.css";
import * as searchService from "../Services/VerseService";
import { BibleDict } from "../Objects/BibleDict";
import { NKV } from "../Objects/NKV";


export function SearchComponent(props) {
  const [searchString, setSearchString] = useState("");
  const [apiResult, setApiResult] = useState(""); 
  const [verse, setVerse] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [book, setBook] = useState("");
  const [englishVerse, setEnglishVerse] = useState("");

  const submit = (event) => {
    const numbers = extractNumbers(searchString);
    const book = extractBook(searchString);
    const chapter = numbers[0];
    const verse = numbers[1];

    setBook(book);
    setChapter(chapter);
    setVerse(verse);


    console.log("Searching for", book, chapter, verse);

    setApiResult("Searching...")
    searchService.fetchVerseTest(book, chapter, verse, setApiResult);

    let translatedBook = translateBook(book);

    let engVerse = findNKJ( translatedBook, chapter, verse);

    setEnglishVerse(engVerse);
    
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

      <div className="apiResult">
        {book ? <div className="apiResult-title">{book}:{chapter}:{verse}</div> : "Welcome"}
        <div className="apiResult-kor">{apiResult} </div>
        <div className="apiResult-eng">{englishVerse} </div>
      </div>

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

function translateBook( book) {
  return BibleDict[book];
}

function findNKJ(engBook, chapter, verse) {
  const chapterName = "Chapter " + chapter;
  const verseName = "verse " + verse;

  if(
    typeof NKV["NKV"][engBook] != "undefined" &&
    typeof NKV["NKV"][engBook][chapterName] != "undefined" &&
    typeof NKV["NKV"][engBook][chapterName][verseName] != "undefined"){
    return NKV["NKV"][engBook][chapterName][verseName];
  }
  
  return "Not found";
}

