import React, { useState } from "react";

function Mycomp1() {
  const [val, setVal] = useState(0);

  function updateVal() {
    // react 는 re render 시점을 적절한 순간으로 선택함
    setVal(val + 1);
    setVal(val + 1);
    setVal(val + 1);
    console.log("val", val);
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={updateVal}>증가</button>{" "}
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <Mycomp1 />
    </div>
  );
}

export default App;
