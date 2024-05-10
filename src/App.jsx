import React from "react";
function MyComp(props){
  return <div>
    <h1 style={headStyle}>lorem</h1>
    <h1 style={bodyStyle}>lorem</h1>
  </div>
}


function App(props) {
  return <div>
    <MyComp headStyle={{padding:"5px",
    border:"1px solid black",
    color:"blue"}}
            bodyStyle={{padding:"5px",
            border:"1px solid black",
            color:"blue"}}
  </div>;
}

export default App;
