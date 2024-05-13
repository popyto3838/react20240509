import React from "react";

function MyNumber() {
  const [number, setNumber] = React.useState(1000);

  return (
    <div>
      <div>{number}</div>
      <div>
        <button onClick={() => setNumber(number - 1)}>1씩감소</button>
        <button onClick={() => setNumber(number + 1)}>1씩증가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyNumber />
    </div>
  );
}

export default App;
