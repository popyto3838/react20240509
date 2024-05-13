import React, { useState } from "react";

function MyComp() {
  // react component 는 상태(state)가 바뀌면 다시 그려짐(re render)
  // 각 component의 state는 react가 관리
  let val = 0;

  function increment() {
    val++;
    console.log("val", val);
  }

  return (
    <div>
      {val}
      <button onClick={increment}>증가</button>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState(0);

  function increment() {
    setVal(val + 1);
  }

  return (
    <div>
      {val}
      <button onClick={increment}>+</button>
      <button>증가</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
