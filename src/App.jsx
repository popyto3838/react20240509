import React from "react";

let son = {
  firstName: "흥민",
  lastName: "손",
  address: "이대",
  country: "한국",
  married: true,
};

function App(props) {
  return (
    <div>
      <ul>
        <li>성:{son.firstName}</li>
        <li>이름:{son.lastName}</li>
        <li>주소:{son.address}</li>
        <li>국가:{son.country}</li>
        <li>결혼여부:{son.married ? "기혼" : "미혼"}</li>
      </ul>
    </div>
  );
}

export default App;
