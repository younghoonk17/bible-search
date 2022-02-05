import React, { useState } from "react";
import "./SearchComponent.css";
import * as searchService from "../Services/VerseService";
import { BibleDict } from "../Objects/BibleDict";
import { NKV } from "../Objects/NKV";

export function SearchComponent(props) {
  const [searchedString, setSearchedString] = useState("");
  const [searchString, setSearchString] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [englishVerse, setEnglishVerse] = useState("");

  const submit = (event) => {
    const book = extractBook(searchString);
    const numbers = extractNumbers(searchString);
    const chapter = numbers[0];
    const verse = numbers[1];
    let verse2 = 0;

    setSearchedString(searchString);

    if (isMultiLineSearch(searchString)) {
      verse2 = numbers[2];
      console.log(verse2);
    }

    searchService.fetchVerseTest(book, chapter, verse, verse2, setApiResult);

    //English verse
    let translatedBook = translateBook(book);
    let engVerse = [];

    if (verse2 != 0) {
      for (let i = parseInt(verse); i <= parseInt(verse2); i++) {
        engVerse.push(i + ". " + findNKJ(translatedBook, chapter, i));
      }
    } else {
      engVerse.push(verse + ". " + findNKJ(translatedBook, chapter, verse));
    }

    setEnglishVerse(engVerse);

    event.preventDefault();
  };

  return (
    <div>
      <div className="bibleForm">
        <form onSubmit={submit}>
          <label>Search for a verse?</label>
          <br></br>
          <div className="group-button">
          <input
            className="button"
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="창세기 1:1 or 창세기 1:1-5"
          />
          <button
          className="search-button">SEARCH</button>
          </div>
        </form>
      </div>
      {searchedString ? (
        <div className="apiResult">
          <div className="apiResult-title">{searchedString}</div>
          <div className="apiResult-kor">
            {apiResult && apiResult.map((item) => <div>{item}</div>)}{" "}
          </div>
          <div className="apiResult-eng">
            {englishVerse && englishVerse.map((item) => <div>{item}</div>)}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function isMultiLineSearch(searchString) {
  const regularExpression = /-/g;
  return regularExpression.test(searchString);
}

function extractBook(searchString) {
  const regularExpression = /[\u3131-\uD79D]+/giu;
  return searchString.match(regularExpression);
}

function extractNumbers(searchString) {
  const regularExpression = /\d+/g;
  return searchString.match(regularExpression);
}

function translateBook(book) {
  return BibleDict[book];
}

function findNKJ(engBook, chapter, verse) {
  const chapterName = "Chapter " + chapter;
  const verseName = "verse " + verse;

  if (typeof NKV["NKV"][engBook] == "undefined") {
    return "Not found";
  }

  return NKV["NKV"][engBook][chapterName][verseName];
}
