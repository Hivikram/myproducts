import React from "react";
import "./index.css";
import { useState } from "react";
import { useCon } from "../contextApi";
function SearchFilter(props) {
  const { inputValue, setInputValue, featchData } = useCon();
  const [inputData, setInputData] = useState("");
  const changeInput = (e) => {
    setInputData(e.target.value);
  };
  // setInputValue(featchData);
  const searchData = featchData.filter((each) => {
    return each.title.toLowerCase().includes(inputData.toLowerCase());
  });
  // setInputValue(searchData);
  console.log(searchData);
  return (
    <div className="searchFilterbg">
      <div className="searchContainer">
        <input
          onChange={changeInput}
          className="input"
          type="text"
          placeholder="mens"
        />
        {/* <button className="searchBtn">Search</button> */}
      </div>
    </div>
  );
}

export default SearchFilter;
