import React, { useState,useEffect } from "react";
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Flower from "./flower";
import fairy from './fairy.png'
import cry from './crying.png'

var count = 0;

function Home() {

  const texts = ["Who has asked me for wi-", "Oh wait , its you again", "do you remember me ?","I wished you on your birthday, what brings you here ?",
    "Oh ! the Eid wish.", "So , let me ask you again", "How will you liked to be wished ?"
  ]; // Messages
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 4000); // Change text every 2 seconds

      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      setTimeout(() => setShowButtons(true), 1000); // Show buttons after last text
    }
  }, [currentTextIndex]);

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {/* Image on Left */}
      <img 
        src={fairy}
        alt="Display" 
        style={{ width: "150px", height: "150px", marginRight: "20px" }} 
      />

      <h2 style={{color: "white"}}>{texts[currentTextIndex]}</h2>
      {showButtons && (
      <div>
      <h2 style={{color: "white"}}></h2>
      <FunButtons />
      </div>
      )}
      </div>
    </div>
  );
} 

const NoPage = () => (
  <div className="container">
    <img 
        src={cry}
        alt="Display" 
        style={{ width: "150px", height: "150px", marginRight: "20px" }} 
      />
    <h1>You chose No again . I worked hard to prepare this, not go back and choose yes</h1>
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
  backgroundColor: "#FFF",
  color: "#ff758c",
  fontWeight: "bold",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  top: position.top,
  left: position.left,
  position: "absolute", 
  top: position.top, 
  left: position.left
   }} id="yes-btn" onClick={() => moveYesButton()}>Special Wish</button>
      <div style={{display:"flex",flexDirection:"column"}}>
      {count > 6 && <p>You can try this one maybe</p>}
      <button style={buttonStyle} onClick={() => navigate("/no")}>Simple Wish</button>
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
  backgroundColor: "#FFF",
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
