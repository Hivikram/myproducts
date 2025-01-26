import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
const PostItemPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");
  const [responce, setResponce] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const postData = {
      category,
      description,
      image: imageUrl,
      price,
      rating: { rate, count },
      title,
    };

    console.log(postData, "mydata");
    const url = "https://fakestoreapi.com/products";
    const PostObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      headder: "aplication/json",
      body: JSON.stringify(postData),
    };
    const res = await fetch(url, PostObj);
    const resData = await res.json();
    setResponce(resData);
    setLoader(false);
    setTitle("");
    setPrice("");
    setDescription("");
    setCount("");
    setImageUrl("");
    setRate("");
    setCategory("");
  };
  console.log(responce, "o");
  return (
    <div className="bg-primary postBg">
      <h1 className="text-white text-center">Post New Item</h1>

      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="d-flex flex-row align-items-center">
            <label className="postTitle">Title</label>
            <input
              className="input1"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter product title"
              required
            />
          </div>

          <div className="d-flex flex-row  align-items-center">
            <label className="postTitle">Price</label>
            <input
              className="input1"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              required
            />
          </div>

          <div className="d-flex flex-row  align-items-center">
            <label className="postTitle">Description</label>
            <textarea
              className="input2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              required
            />
          </div>
          <div className="d-flex flex-row  align-items-center">
            <label className="postTitle">Rating</label>
            <textarea
              className="input2"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter product rating"
              required
            />
          </div>
          <div className="d-flex flex-row  align-items-center">
            <label className="postTitle">Category</label>
            <input
              className="input1"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter product category"
              required
            />
          </div>
          <div className="d-flex flex-row  align-items-center">
            <label className="postTitle">Count</label>
            <textarea
              className="input2"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder="Enter product count"
              required
            />
          </div>

          <div className="d-flex flex-row  align-items-center">
            <label className="postTitle">Image URL</label>
            <input
              className="input1"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>
        </div>
        <button className="btn  text-white" type="submit">
          Post Item
        </button>
      </form>
      {loader ? (
        <div className="yourItemdiv">
          <CircleLoader />
        </div>
      ) : responce == null ? (
        ""
      ) : (
        <div className="yourItemdiv">
          <h5 className="text-white">
            Title: <span className="res">{responce.title}</span>
          </h5>
          <p className="text-white">
            Description: <span className="res">{responce.description}</span>
          </p>
          <p className="text-white">
            Price: <span className="res">{responce.price}</span>
          </p>
          <p className="text-white">
            Category: <span className="res">{responce.category}</span>
          </p>

          <p className="text-white">
            Image Link: <span className="res">{responce.image}</span>
          </p>
        </div>
      )}
      <button
        className="btn text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default PostItemPage;
