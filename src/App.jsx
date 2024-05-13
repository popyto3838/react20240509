import React from "react";
import { v1, v2 } from "./values2.jsx";
import { c1, v2 as c2 } from "./values1.jsx";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      {/*korea*/}
      <div>{v2}</div>
      {/*seoul*/}
      <div>{c1}</div>
      {/*usa*/}
      <div>{c2}</div>
      {/*  ny*/}
    </div>
  );
}

export default App;
