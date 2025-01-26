import { useState, React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/index.jsx";
import EachItem from "./components/eachitem/index.jsx";
import NotfoundPage from "./components/Notfound/index.jsx";
import SignupForm from "./components/signUp/index.jsx";
import Login from "./components/login/index.jsx";
import PostItemPage from "./components/postItems/index.jsx";
import SimpleMap from "./components/maps/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contextobj } from "./components/contextApi/index.jsx";
function App() {
  return (
    <Contextobj>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<EachItem />} />
          <Route path="/postitem" element={<PostItemPage />} />
          <Route path="/map" element={<SimpleMap />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Contextobj>
  );
}

export default App;
