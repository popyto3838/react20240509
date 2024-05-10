import React from "react";

function MyButton({ name, sx, on }) {
  return (
    <button style={sx} onClick={on}>
      {name}
    </button>
  );
}

function App(props) {
  return (
    <div>
      {/*  두개의 MyButton 컴포넌트를 사용 sx, name*/}

      <MyButton
        name="버튼1"
        sx={{
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
        }}
      />
    </div>
  );
}

export default App;
