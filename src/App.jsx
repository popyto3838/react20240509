import React from "react";

function App(props) {
  //object({},[])

  const a = [6, 7, 8];
  const [x, y, z] = a;

  console.log(x); //6
  console.log(y); //7
  console.log(z); //8

  //나머지 모두(...변수명)

  const [s, ...t] = a;
  console.log(s); //6
  console.log(t); //[7,8]
  console.log(t[0]); //7
  console.log(t[1]); //8

  //나머지 모두로 배열 복사
  const c = a; // 참조값복사
  const [...b] = a; // 각 원소를 새 배열에 복사

  console.log(b); //[6,7,8]

  c[0] = 66;
  console.log(a[0]); //66
  console.log(b[0]); //6
  console.log(c[0]); //66

  //연습 : 객체복사

  const d = ["pizza", "son", 77];
  //코드작성
  //1. 참조값복사, 객체e
  //2. 각 원소를 복사 해서 새 배열 만들기, 객체 f
  const e = d;
  const [...f] = d;

  e[2] = 88;
  console.log("d", d); //["pizza", "son", 88]
  console.log("e", e); //["pizza", "son", 88]
  console.log("f", f); //["pizza", "son", 77]

  return <div></div>;
}

export default App;
