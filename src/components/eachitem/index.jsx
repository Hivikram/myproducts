import { useEffect, useState, react } from "react";
import "./index.css";

import NavBar from "../navItems";
import { useParams, Link } from "react-router-dom";

import { CircleLoader } from "react-spinners";
function EachItem() {
  const id = useParams();
  console.log(id.id);
  const [productDetails, setProductDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const eachDetails = async () => {
    setLoader(false);
    const res = await fetch(`https://fakestoreapi.com/products/${id.id}`);
    const data = await res.json();
    setProductDetails(data);
    setLoader(true);
  };

  useEffect(() => {
    eachDetails();
  }, []);

  return (
    <div className="detailsCardbg bg-primary d-flex flex-column  align-items-center">
      <NavBar />
      <div className="card d-flex flex-column align-items-center p-3 mt-5  ">
        {loader ? (
          <>
            <img
              alt={productDetails.title}
              className="card-img-top detailsCardImg"
              src={productDetails.image}
            />
            <h1 className="headder">{productDetails.title}</h1>
            <div className="flexDiv">
              <div className="flexDiv">
                <p className="cardCost">
                  Cost : <span>{productDetails.price}</span>$
                </p>
              </div>
            </div>
            <p className="cardDescription">{productDetails.description}</p>
            <Link to={"/"}>Back</Link>
          </>
        ) : (
          <div className="itemCard">
            <CircleLoader />
          </div>
        )}
      </div>
    </div>
  );
}

export default EachItem;
