import "./App.scss";
import React from "react";
import HomePage from "./pages/HomePage";
import NavBarCustom from "./components/NavBarCustom";

const App = function App() {
  return (
    <>
      <NavBarCustom />
      <HomePage />
    </>
  );
};

export default App;
