// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
// import './App.css'
// const Home = () => {
//   const [yesPosition, setYesPosition] = useState({ top: "50%", left: "50%" });
//   const navigate = useNavigate();

//   const moveYesButton = () => {
//     setYesPosition({
//       top: `${Math.random() * 80 + 10}%`,
//       left: `${Math.random() * 80 + 10}%`,
//     });
//   };

//   return (
//     <div className="container">
//       <h1>Do you like surprises?</h1>
//       <button
//         className="yes-button"
//         onClick={moveYesButton}
//         style={{ top: yesPosition.top, left: yesPosition.left }}
//       >
//         Yes
//       </button>
//       <button className="no-button" onClick={() => navigate("/goodbye")}>
//         No
//       </button>
//     </div>
//   );
// };

// const Goodbye = () => (
//   <div className="container">
//     <h1>Oh no! Come back soon! 😢</h1>
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/goodbye" element={<Goodbye />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
