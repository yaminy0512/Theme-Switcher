import React, { useState } from "react";

export const App = () => {
  // Step 1: State setup
  const [isDark, setIsDark] = useState(false);

  // Step 2: Toggle function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Light theme styles
  const lightStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };

  // Dark theme styles
  const darkStyle = {
    backgroundColor: "#1a1a1a",
    color: "#f9f9f9",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };

  return (
    <div style={isDark ? darkStyle : lightStyle}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;