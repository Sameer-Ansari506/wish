import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Flower from "./flower";

function Home() {
  return (
    <div className="container">
      <FunButtons />
    </div>
  );
} 

const NoPage = () => (
  <div className="container">
    <h1>Oh no! You chose No!</h1>
  </div>
);

const FunButtons = () => {
  const navigate = useNavigate(); 

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
  background: "linear-gradient(to right, #ff758c, #ff7eb3)"
    }}>
      <button style={buttonStyle} onClick={() => navigate("/flowers")}>Yes</button>
      <button style={buttonStyle} onClick={() => navigate("/no")}>No</button>
    </div>
  );
};

const buttonStyle = {
  fontSize: "20px",
  padding: "15px 30px",
  margin: "10px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#AAA",
  color: "#ff758c",
  fontWeight: "bold",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/no" element={<NoPage />} />
        <Route path="/flowers" element={<Flower />} />
      </Routes>
    </Router>
  );
}
