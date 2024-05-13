import React from "react";

function MyButton({ children }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyButton>클릭1</MyButton>
      <MyButton>클릭2</MyButton>
    </div>
  );
}

export default App;
