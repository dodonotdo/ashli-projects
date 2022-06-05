import React from "react";
import "./Navbar.css";

function MenuItems() {
  return (
    <nav className="heading">
      <ul>
        <li key="uniqueId1">
          <a href="<One/>" target="_blank">
            Items Details
          </a>
        </li>
        <li key="uniqueId2">
          <a href="#purchase" target="_blank">
            Purchase
          </a>
        </li>
        <li key="uniqueId3">
          <a href="#sales" target="_blank">
            Sales
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuItems;
