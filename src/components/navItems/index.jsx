import React from "react";
import "./index.css";
function NavBar() {
  return (
    <div className="navContainer  mr-3 mt-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTW1PEKBXatM3jdbduRXhOsz-kLDhLLo4bjA&s"
        alt="products"
        className="img"
      />
      <h1 className="navTitle">Products</h1>
    </div>
  );
}

export default NavBar;
