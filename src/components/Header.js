import React from "react";

export default function Header({ onClickButton, isDarkMode, className }) {
  function handleClick() {
    const darkModeStyle = className;
    onClickButton(darkModeStyle);
  }

  return (
    <div className={"App"}>
      {/* <div className={"App " + (isDarkMode ? "dark" : "light")}> */}
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
    </div>
  );
}
