import React from "react";

function MyComp(props){
  return <div></div>;
}

function App(props) {
  return <div>


    <MyComp
      {/* props의 값타입은 javascript 값타입 */}
      {/* {}에 값 입력,(string만 생략 가능)*/}
            name={"son"}
            age={3.14}
            address={{city:"seoul", country:"us"}}
            foods={["pizza","coffee"]}
            married={true}
            action={function (){
            console.log("action");
            }}
            someAction={()=>console.log("someAction")}
    />
  </div>;
}

export default App;
