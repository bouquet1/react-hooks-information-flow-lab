import React from "react";

export default function Header({ onDarkModeClick, isDarkMode, className }) {
  return (
    <div className={"App"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
    </div>
  );
}
