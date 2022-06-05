import React from "react";
import "./App.css";
import MenuItems from "./components/NavbarItems/Navbar";
import One from "./components/NavbarItems/ItemsDetails";
import Two from "./components/NavbarItems/Purchase";
import Three from "./components/NavbarItems/Sales";
import ItemsDetailsForm from "./components/NavbarItems/ItemsDetailsForm";

function App() {
  return (
    <div>
      <MenuItems />
      <One />
      <Two />
      <Three />
      <ItemsDetailsForm />
    </div>
  );
}

export default App;
