function App() {
  // javascript review

  // javascript data type
  // 값을적지않으면 undefined
  let a; //값이 할당되지 않으면 undefined
  console.log("a", typeof a);

  let b = "문자열 타입"; // string
  console.log("b", typeof b);

  let c = 3; //number 정수실수 안나누고 number
  console.log("c", typeof c);

  let e = true; // boolean
  console.log("e", typeof e);

  let f = {}; // object  객체 타입
  console.log("f", typeof f);

  let g = function () {}; // function 타입
  console.log("g", typeof g);

  g = {};
  console.log("g", typeof g);

  // 자바스크립트에서는 변수에 값이 들어갈떄 타입이 결정된다

  return <div></div>;
}

export default App;
