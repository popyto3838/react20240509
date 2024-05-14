import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    console.log("버튼 클릭됨");

    axios.get("/path1");
  }

  function handleClick2() {
    const qs = "city=seoul&address=gangnam";
    axios.get("/path2?" + qs);
  }

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("name", "slayer");
    qs.append("age", "22");
    axios.get("/path3?" + qs.toString());
  }

  return (
    <div>
      <div>
        <button onClick={handleClick1}>/path1 get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>
          /path2 get 요청,city, address 요청파라미터 첨부
        </button>
      </div>
      <div>
        <button onClick={handleClick3}>
          /path3 get 요청 name,age요청 파라미터 첨부
        </button>
      </div>
    </div>
  );
}

export default App;
