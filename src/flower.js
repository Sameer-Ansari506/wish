import React, { useEffect,useState } from "react";
 import "./styles.css"; // Import CSS


 const msg = [
  [
    "🌸 The day has come with joy so bright  🌸",
    "✨ Filling your heart with pure delight ✨",
    "🌸 A day of joy , a day of cheer        🌸",
    "✨ The day may bring smiles             ✨",
    "🌸 To far and near                      🌸"
  ]
  ,
  [
    "✨ Your family be blessed            ✨",
    "🌸 May your home with laughter shine 🌸",
    "✨ On this day , so divine           ✨"
  ],
  [
    "🌸 May you get all that is happy   🌸",
    "✨ And it may stay                 ✨",
    "🌸 May you thrive and you may      🌸",
    "✨ Shine so bright , i always pray ✨",
  ],
  [
    "N ew joys bloom like morning light     ✨",
    "E ver your heart feels pure and bright 🌸",
    "H ope and love in prayers high         ✨",
    "A llah's blessings always nigh         🌸"
  ],
  [
    "✨ May this day brings peace your way    ✨",
    "🌸 Filling your life with joy each day   🌸",
    "✨ Smiles and laughter, dreams come true ✨"
  ]

 ]

 const eid = "🌸✨ Eid Mubarak to you ✨🌸"
 
 const FlowerAnimation = () => {
   useEffect(() => {
     document.body.classList.add("not-loaded");
 
     setTimeout(() => {
       document.body.classList.remove("not-loaded");
     }, 100); // Simulating a preloader effect
   }, []);


    const [fade, setFade] = useState(true);
       const [currentTextIndex, setCurrentTextIndex] = useState(0);useEffect(() => {
           const showTime = 4000; // Stay visible for 3 seconds
           const fadeTime = 2000; // Fade-out duration
       
           if(currentTextIndex < msg.length){
           const timer = setTimeout(() => {
             setFade(false); // Start fade-out
       
             setTimeout(() => {
               setCurrentTextIndex((prevIndex) => prevIndex + 1); // Change text
               setFade(true); // Start fade-in
             }, fadeTime);
           }, showTime);
       
           return () => clearTimeout(timer);
       } 
         }, [currentTextIndex]);
       

 
   return (
  <div>
     <div class="night">
     <div style={{color:"white",display:"flex",justifyContent:"center",marginTop:"70px"}}>
      
      {currentTextIndex < msg.length && currentTextIndex!= 3 &&
        <h4 className={fade ? "fade-in" : "fade-out"} style={{}}>
          {msg[currentTextIndex].map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </h4>
      }

    { currentTextIndex == 3 && 
    <div>
      {
      msg[3].map((line, index) => (
        <p key={index}>
          <span style={{color:"pink",fontWeight:"bold",fontSize:'15px'}}>{line.charAt(0)}</span>
          {line.slice(1)}
        </p>
      ))}
    </div>
    }


      {!(currentTextIndex < msg.length) &&
        <h4 className={fade ? "fade-in" : "fade-out"}>
          {eid}
        </h4>
      }
      </div>
     </div>
     <div class="flowers">
       <div class="flower flower--1">
         <div class="flower__leafs flower__leafs--1">
           <div class="flower__leaf flower__leaf--1"></div>
           <div class="flower__leaf flower__leaf--2"></div>
           <div class="flower__leaf flower__leaf--3"></div>
           <div class="flower__leaf flower__leaf--4"></div>
           
   
           <div class="flower__white-circle"></div>
   
           <div class="flower__light flower__light--1"></div>
           <div class="flower__light flower__light--2"></div>
           <div class="flower__light flower__light--3"></div>
           <div class="flower__light flower__light--4"></div>
           <div class="flower__light flower__light--5"></div>
           <div class="flower__light flower__light--6"></div>
           <div class="flower__light flower__light--7"></div>
           <div class="flower__light flower__light--8"></div>
   
         </div>
         <div class="flower__line">
           <div class="flower__line__leaf flower__line__leaf--1"></div>
           <div class="flower__line__leaf flower__line__leaf--2"></div>
           <div class="flower__line__leaf flower__line__leaf--3"></div>
           <div class="flower__line__leaf flower__line__leaf--4"></div>
           <div class="flower__line__leaf flower__line__leaf--5"></div>
           <div class="flower__line__leaf flower__line__leaf--6"></div>
         </div>
       </div>
   
       <div class="flower flower--2">
         <div class="flower__leafs flower__leafs--2">
           <div class="flower__leaf flower__leaf--1"></div>
           <div class="flower__leaf flower__leaf--2"></div>
           <div class="flower__leaf flower__leaf--3"></div>
           <div class="flower__leaf flower__leaf--4"></div>
           <div class="flower__white-circle"></div>
   
           <div class="flower__light flower__light--1"></div>
           <div class="flower__light flower__light--2"></div>
           <div class="flower__light flower__light--3"></div>
           <div class="flower__light flower__light--4"></div>
           <div class="flower__light flower__light--5"></div>
           <div class="flower__light flower__light--6"></div>
           <div class="flower__light flower__light--7"></div>
           <div class="flower__light flower__light--8"></div>
   
         </div>
         <div class="flower__line">
           <div class="flower__line__leaf flower__line__leaf--1"></div>
           <div class="flower__line__leaf flower__line__leaf--2"></div>
           <div class="flower__line__leaf flower__line__leaf--3"></div>
           <div class="flower__line__leaf flower__line__leaf--4"></div>
         </div>
       </div>
   
       <div class="flower flower--3">
         <div class="flower__leafs flower__leafs--3">
           <div class="flower__leaf flower__leaf--1"></div>
           <div class="flower__leaf flower__leaf--2"></div>
           <div class="flower__leaf flower__leaf--3"></div>
           <div class="flower__leaf flower__leaf--4"></div>
           <div class="flower__white-circle"></div>
   
           <div class="flower__light flower__light--1"></div>
           <div class="flower__light flower__light--2"></div>
           <div class="flower__light flower__light--3"></div>
           <div class="flower__light flower__light--4"></div>
           <div class="flower__light flower__light--5"></div>
           <div class="flower__light flower__light--6"></div>
           <div class="flower__light flower__light--7"></div>
           <div class="flower__light flower__light--8"></div>
   
         </div>
         <div class="flower__line">
           <div class="flower__line__leaf flower__line__leaf--1"></div>
           <div class="flower__line__leaf flower__line__leaf--2"></div>
           <div class="flower__line__leaf flower__line__leaf--3"></div>
           <div class="flower__line__leaf flower__line__leaf--4"></div>
         </div>
       </div>
   
       <div class="grow-ans" style={animatedStyle}>
         <div class="flower__g-long">
           <div class="flower__g-long__top"></div>
           <div class="flower__g-long__bottom"></div>
         </div>
       </div>
   
       <div class="growing-grass">
         <div class="flower__grass flower__grass--1">
           <div class="flower__grass--top"></div>
           <div class="flower__grass--bottom"></div>
           <div class="flower__grass__leaf flower__grass__leaf--1"></div>
           <div class="flower__grass__leaf flower__grass__leaf--2"></div>
           <div class="flower__grass__leaf flower__grass__leaf--3"></div>
           <div class="flower__grass__leaf flower__grass__leaf--4"></div>
           <div class="flower__grass__leaf flower__grass__leaf--5"></div>
           <div class="flower__grass__leaf flower__grass__leaf--6"></div>
           <div class="flower__grass__leaf flower__grass__leaf--7"></div>
           <div class="flower__grass__leaf flower__grass__leaf--8"></div>
           <div class="flower__grass__overlay"></div>
         </div>
       </div>
   
       <div class="growing-grass">
         <div class="flower__grass flower__grass--2">
           <div class="flower__grass--top"></div>
           <div class="flower__grass--bottom"></div>
           <div class="flower__grass__leaf flower__grass__leaf--1"></div>
           <div class="flower__grass__leaf flower__grass__leaf--2"></div>
           <div class="flower__grass__leaf flower__grass__leaf--3"></div>
           <div class="flower__grass__leaf flower__grass__leaf--4"></div>
           <div class="flower__grass__leaf flower__grass__leaf--5"></div>
           <div class="flower__grass__leaf flower__grass__leaf--6"></div>
           <div class="flower__grass__leaf flower__grass__leaf--7"></div>
           <div class="flower__grass__leaf flower__grass__leaf--8"></div>
           <div class="flower__grass__overlay"></div>
         </div>
       </div>
   
       <div class="grow-ans" style={animatedStyle}>
         <div class="flower__g-right flower__g-right--1">
           <div class="leaf"></div>
         </div>
       </div>
   
       <div class="grow-ans" style={animatedStyle}>
         <div class="flower__g-right flower__g-right--2">
           <div class="leaf"></div>
         </div>
       </div>
   
       <div class="grow-ans" style={animatedStyle}>
         <div class="flower__g-front">
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
             <div class="flower__g-front__leaf"></div>
           </div>
           <div class="flower__g-front__line"></div>
         </div>
       </div>
   
       <div class="grow-ans" style={animatedStyle}>
         <div class="flower__g-fr">
           <div class="leaf"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
           <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
         </div>
       </div>
   
       <div class="long-g long-g--0">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--1">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--2">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--3">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--4">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--5">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--6">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
   
       <div class="long-g long-g--7">
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--0"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--1"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--2"></div>
         </div>
         <div class="grow-ans" style={animatedStyle}>
           <div class="leaf leaf--3"></div>
         </div>
       </div>
     </div>
     </div>
   );
 };
 
 const animatedStyle = {
     animation: `example 3s ease-in-out infinite`
   };
 
 export default FlowerAnimation;