import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "john@example.com",
    password: "1234567890",
  };
  return (
    <div>
      <ul>
        <li>age;{obj.age}</li>
        <li>name;{obj.name}</li>
        <li>email;{obj.email}</li>
        <li>password;{obj.password}</li>
      </ul>
    </div>
  );
}

export default App;
