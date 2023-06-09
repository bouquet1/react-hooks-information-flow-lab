import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function DarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const style = "App " + (isDarkMode ? "dark" : "light");

  return (
    <div className={style}>
      <Header className={style} onDarkModeClick={DarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList className={style} items={itemData} />
    </div>
  );
}

export default App;
