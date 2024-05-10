import React from "react";

function MyComp() {
  return (
    <div>
      <h1 style={{ color: headColor }}>lorem</h1>
      <h1 style={{ color: bodyColor }}>lorem</h1>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp headColor={"skyblue"} bodyColor={"gold"} />
      <MyComp headColor={"gray"} bodyColor={"linen"} />
    </div>
  );
}

export default App;
