import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Flower from "./flower";

var count = 0;

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
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const navigate = useNavigate();

  const moveYesButton = () => {
    const x = Math.random() * (window.innerWidth - 100); // Adjust for button width
    const y = Math.random() * (window.innerHeight - 50); // Adjust for button height
    setPosition({ top: `${y}px`, left: `${x}px` });
    console.log(position.top,position.left);
    var value = document.getElementById("yes-btn")
    value.top = position.top
    value.left = position.left
    count = count+1;
  };
  return (
    <div >
      <button style={{fontSize: "20px",padding: "15px 30px",margin: "10px",border: "none",borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#AAA",
  color: "#ff758c",
  fontWeight: "bold",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  top: position.top,
  left: position.left,
  position: "absolute", 
  top: position.top, 
  left: position.left
   }} id="yes-btn" onClick={() => moveYesButton()}>Yes</button>
      <div style={{display:"flex",flexDirection:"column"}}>
      {count > 6 && <p>It is right here 🥲</p>}
      <button style={buttonStyle} onClick={() => navigate("/no")}>No</button>
      </div>
    </div>
  );
};

const buttonStyleY = {
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
  top: "position.top,",
  left: "position.left "
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
