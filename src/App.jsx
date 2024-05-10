import React from "react";

function App(props) {
  function action1() {
    console.log("이름있는함수");
  }

  const a = function () {
    console.log("이름 없는 함수");
  };

  const b = () => {
    console.log("arrow 변수에담아서넣기");
  };

  return (
    <div>
      <button onClick={action1}>
        click1 onClick property에 이름 있는 함수 넣기
      </button>
      <button onClick={a}>
        click2 onClick property에 이름 없는 함 수 변수에 담아서 넣기
      </button>
      <button
        onClick={function () {
          console.log("이름없는함수 바로넣기");
        }}
      >
        click3 onClick property에 이름없는 함수 바로 넣기
      </button>
      <button onClick={b}>
        click4 onClick property에 arrow function 변수에 담아서 넣기
      </button>
      <button
        onClick={() => {
          console.log("arrow 바로 넣기");
        }}
      >
        click5 onClick property에 arrow function 바로넣기
      </button>
    </div>
  );
}

export default App;
