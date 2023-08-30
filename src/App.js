import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleToggle} className="dropdown-toggle">
          Toggle Dropdown
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
