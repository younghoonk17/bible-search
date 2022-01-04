import React, { useState } from "react";

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

      {apiResult ? (<ul><li>{apiResult}</li></ul>) : null}
    </div>
  );
}
