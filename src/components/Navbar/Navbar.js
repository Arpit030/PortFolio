import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import { assets } from "../../assets/assets"; // Assuming you have moon and sun icons in assets

function Navbar() {
  // // State to manage theme (dark or light)
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // // Function to toggle theme
  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // // Apply the theme to the body of the webpage
  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add("dark-mode");
  //     document.body.classList.remove("light-mode");
  //   } else {
  //     document.body.classList.add("light-mode");
  //     document.body.classList.remove("dark-mode");
  //   }
  // }, [isDarkMode]);

  return (
    <div className="navbar" id="navbar">
      <div className="name">
        <h4 className="nav_link">Arpit</h4>
      </div>
      <div className="options">
        <div className="optionlist">
          <h4><a href="#home" className="nav_link">Home</a></h4>
          <h4><a href="#about" className="nav_link">About</a></h4>
          <h4><a href="#skills" className="nav_link">Skills</a></h4>
          <h4><a href="#qualification" className="nav_link">Qualifications</a></h4>
          <h4><a href="#projects-container" className="nav_link">Projects</a></h4>
          <h4><a href="#contact" className="nav_link">Contact Me</a></h4>
        </div>

        {/* Toggle Button for Theme
        <div className="icon" onClick={toggleTheme}>
          <img 
            src={isDarkMode ? assets.moonLight : assets.sunLight} 
            alt="Theme toggle icon" 
            className="theme-icon" 
          />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
