import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // ajax get 요청
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    // ajax post 요청
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.post("/api/someurl2");
  }

  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "son");
    params.append("email", "son@gmail.com");
    axios.get(`/api/someurl3?${params}`);
  }

  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("city", "서울");
    params.append("country", "한국");
    axios.post("/api/someurl3", params);
  }

  function handleClickButton7() {
    const params = new URLSearchParams();
    params.append("id", 4);
    params.append("name", "slayer");
    params.append("job", "soul");
    axios.get(`/api/someurl4?${params}`);
  }

  function handleClickButton8() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "soul");
    params.append("job", "slayer");
    axios.get(`/api/someurl4?${params}`);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>

      {/* /api/someurl2*/}
      <button onClick={handleClickButton3}>get 요청2</button>
      <button onClick={handleClickButton4}>post 요청2</button>
      {/* data도 함께 보내기*/}
      <button onClick={handleClickButton5}>get요청 with query string</button>
      <button onClick={handleClickButton6}>post 요청 with data</button>
      {/* /api/someurl4 get/post with data*/}
      <button onClick={handleClickButton7}>get요청 with query string</button>
      <button onClick={handleClickButton8}>post요청 with query string</button>
    </div>
  );
}

export default App;
