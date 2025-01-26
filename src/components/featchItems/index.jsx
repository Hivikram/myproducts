import { useState, React } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function FeatchItems(props) {
  const { id, name, img } = props;
  console.log(id);

  return (
    <div className=" d-flex flex-column flex-wrap cardSize" key={id}>
      <Link to={`/products/${id}`}>
        <img className=" card-img-top imgSize" src={img} />
        <h1 className="headder text-center text-black">{name}</h1>
      </Link>
    </div>
  );
}

export default FeatchItems;
