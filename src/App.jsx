function App() {
  const a = 5;
  const b = 9;

  function someMethod() {
    return "hello js";
  }
  function someMethod2(a) {
    <p>a +""+a</p>;
  }

  return (
    <>
      <div>
        <p>
          {a}x{b} ={a * b}
        </p>

        <p>{someMethod()}</p>
        <p>{someMethod2("react")}</p>
      </div>
    </>
  );
}

export default App;
