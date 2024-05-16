import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [sex, setSex] = useState("");
  const [job, setJob] = useState("");

  function handleClick1() {
    const obj1 = { name: "son", age: 44 };
    // const json1 =JSON.stringify(obj1);
    // axios가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = { name: "dagger", age: 33 };
    axios.post("api/main41/sub2", obj2);
  }

  function handleClick3() {
    //const data={name,city}
    axios.post("/api/main41/sub3", { name, city });
  }

  function handleClick4() {
    axios.post("/api/main41/sub4", { sex, job });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청 (json 데이터 포함)</button>
      {/*  /api/main41/sub2 post*/}
      <button onClick={handleClick2}>요청 (json 데이터포함)</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청(input에 입력한값)</button>
      </div>
      <div>
        <input type="text" onChange={(e) => setSex(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setJob(e.target.value)} />
        <br />
        <button onClick={handleClick4}>jsonpractice</button>
      </div>
    </div>
  );
}

export default App;
