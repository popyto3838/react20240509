import React from "react";

//<MyButton name="클릭3"/>
// props :{name:"클릭"}

function MyButton(props) {
  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      {props.name}
    </button>
  );
}

function App(props) {
  <button>클릭1</button>;

  return (
    <div>
      <MyButton name="클릭3" />
      <br />
      <MyButton name="클릭4" />
    </div>
  );
}

export default App;
