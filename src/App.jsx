import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  const isToolong = text.length > 10;

  function handeler(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handeler} />
      <p>{text}</p>
      {isToolong && <p>11자 이상 입력할 수 없습니다</p>}
    </div>
  );
}

export default App;
