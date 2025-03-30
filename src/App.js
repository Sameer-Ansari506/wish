import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Flower from "./flower";
import fairy from './fairy.png';
import cry from './crying.png';
import Inter from "./inter";

var count = 0;
var dataR = 0;
function Home() {
  var {val} = useParams();
  const data  = parseInt(val, 10) || 0;
  dataR = data;
  console.log(data)
  const texts = [
    "Who has asked me for wi-",
    "Oh wait, it's you again",
    "Do you remember me?",
    "I wished you on your birthday, what brings you here?",
    "Oh! The Eid wish.",
    "So, let me ask you again",
    "How would you like to be wished?"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowButtons(true), 1000);
    }
  }, [currentTextIndex]);

  useEffect(() => {
    const flowerContainer = document.querySelector(".falling-flowers-container");
  
    function createFlower() {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = `${Math.random() * window.innerWidth}px`;
      flower.style.top = '0px'
      flower.style.animationDuration = `${Math.random() * 3 + 2}s`;
      flowerContainer.appendChild(flower);
  
      setTimeout(() => {
        flower.remove();
      }, 5000);
    }
  
    const flowerInterval = setInterval(createFlower, 500);
  
    return () => clearInterval(flowerInterval);
  }, []);

  return (
    <div className="container">
      <div className="falling-flowers-container" ></div> {/* Flowers Animation */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        
        <img src={fairy} alt="Display" style={{ width: "120px", height: "120px", marginRight: "10px" }} />

        { !data  &&
        <h2 style={{ color: "white" }}>{texts[currentTextIndex]}</h2>
        }

        { (data  || showButtons) && (
          <div>
            <h2 style={{ color: "white" }}></h2>
            <FunButtons />
          </div>
        )}
      </div>
    </div>
  );
}

function NoPage (){
  const navigate = useNavigate()
  return(
  <div className="container">
    <img src={cry} alt="Display" style={{ width: "120px", height: "120px", marginRight: "10px" }} />
    <h3 style={{color:"white"}}>You chose No again. I worked hard to prepare this, now go back and choose yes!</h3>
    <button style={buttonStyle} onClick={() => navigate("/home/1")}>Simple Wish</button>
      
  </div>)
}

const FunButtons = () => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const navigate = useNavigate();

  const moveYesButton = () => {
    if(dataR == 0){
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setPosition({ top: `${y}px`, left: `${x}px` });

    var value = document.getElementById("yes-btn");
    if (value) {
      value.style.top = position.top;
      value.style.left = position.left;
    }

    count = count + 1;
  }
  else{
    navigate("/deep")
  }
  };

  return (
    <div>
      <button
        style={{
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
          position: "absolute",
          top: position.top, 
          left: position.left
        }}
        id="yes-btn"
        onClick={moveYesButton}
      >
        Special Wish 
      </button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {count > 6 && !dataR && <p style = {{color:'white'}}>You can try this one maybe</p>}
        <button style={buttonStyle} onClick={() => navigate("/no")}>Simple Wish</button>
      </div>
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
        <Route path="/home/:val" element={<Home />} />
        <Route path="/no" element={<NoPage />} />
        <Route path="/deep" element={<Inter />} />
        <Route path="/flowers" element={<Flower />} />
      </Routes>
    </Router>
  );
}
