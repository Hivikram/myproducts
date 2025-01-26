import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import SearchFilter from "../searchFilter";
import { Link, useNavigate } from "react-router-dom";
import FeatchItems from "../featchItems";
import NavBar from "../navItems";
import { CircleLoader } from "react-spinners";
// import { useCon } from "../contextApi";
const Home = (props) => {
  const [loader, setLoader] = useState(false);
  const [featchData, setFeatchData] = useState([]);
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();
  const data = async () => {
    setLoader(false);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setFeatchData(data);
    setLoader(true);
    console.log(data);
  };
  useEffect(() => {
    data();
  }, []);
  const changeInput = (e) => {
    setInputData(e.target.value);
  };

  const searchData = featchData.filter((each) => {
    return each.title.toLowerCase().includes(inputData.toLowerCase());
  });

  return (
    <>
      <div className="container d-flex flex-column align-items-center  bg-primary">
        <NavBar />
        <div className="searchFilterbg">
          <div className="searchContainer">
            <input
              onChange={changeInput}
              className="input"
              type="text"
              placeholder="mens"
            />
          </div>
          <div className="  searchContainer searchContainer2">
            <button
              onClick={() => {
                navigate("/map");
              }}
              className="btn navbtn"
            >
              Maps
            </button>
            <button
              onClick={() => {
                navigate("/postitem");
              }}
              className="btn navbtn"
            >
              Post Item
            </button>
          </div>
        </div>

        <div className="itemCard ">
          {loader ? (
            searchData.length > 0 ? (
              searchData.map((each) => (
                <FeatchItems id={each.id} name={each.title} img={each.image} />
              ))
            ) : (
              <h1>No Items</h1>
            )
          ) : (
            <CircleLoader />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
