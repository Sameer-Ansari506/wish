
import React from 'react';
import deep from './deep.jpg'
import  { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';

 function Inter(){
    const navigate = useNavigate();
    const [fade, setFade] = useState(true);
    const messgaes = [
        "What you are going to see next",
        "is truly remarkable",
        "It took days of hardwork",
        "and some creativity to be brought into existence",
        "I hope you like it",
        "No more talks now",
        "Lets dive straigth into it",
        "Enjoy !!"
    ]
    const [currentTextIndex, setCurrentTextIndex] = useState(0);useEffect(() => {
        const showTime = 3000; // Stay visible for 3 seconds
        const fadeTime = 1000; // Fade-out duration
    
        if(currentTextIndex < messgaes.length){
        const timer = setTimeout(() => {
          setFade(false); // Start fade-out
    
          setTimeout(() => {
            setCurrentTextIndex((prevIndex) => prevIndex + 1); // Change text
            setFade(true); // Start fade-in
          }, fadeTime);
        }, showTime);
    
        return () => clearTimeout(timer);
    } else {
        navigate("/flowers")
    }
      }, [currentTextIndex]);
    
      return (
        <div style={{
          margin: "0",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(to right, rgb(255, 117, 175), rgb(7, 7, 7))"
        }}>
          <h2 style={{
            color: "white",
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
          }}>
            {messgaes[currentTextIndex]}
          </h2>
        </div>
      );
    }

export default Inter