import React from "react";

function App(props) {
  const foodList = ["pizza", "burger", "noodle", "coffee"];

  return (
    <div>
      <ul>
        <li>
          {foodList.map((food) => (
            <li>{food}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default App;
