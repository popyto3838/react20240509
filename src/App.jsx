import React from "react";

function App(props) {
  //destructuring assignment
  // (구조)분해 할당

  // object({},[])를 분해해서 할당
  const a = {
    name: "son",
    age: 33,
  };

  const aName = a.name;
  const aAge = a.age;

  console.log("aName", aName);
  console.log("aAge", aAge);

  const { name: bName, age: bAge } = a;

  //프로퍼티 명과 할당받는 변수 명이 같으면 변수명 생략가능
  const { name: name, age: age } = a;
  const { name, age } = a;

  return <div></div>;
}

export default App;
