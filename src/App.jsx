import React, { useState } from "react";

function MyBox() {
  const [target, set] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => set(e.target.value)} />
      <p>{target}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;
