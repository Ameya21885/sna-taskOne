import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./components/product/SingleProduct";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
