function App() {
  // {} 사용해서 javascript 코드 작성 가능

  const v1 = 5;
  const v2 = 7;

  // 컴포넌트는대문자
  function someAction() {
    return "흥민";
  }

  function someAction2(p) {
    return p * p;
  }

  return (
    <>
      <p>
        {2}+{3} ={2 + 3}
      </p>
      <p>
        {v1}+{v2}={v1 + v2}
      </p>
      <p>
        {v1}+{v2}={v1 - v2}
      </p>
      <p>
        {v1} x{v2}={v1 * v2}
      </p>
      <p>{someAction()}</p>
      <p>{someAction2(5)}</p>
      <p>{v1 < 10 ? "작다" : "크다"}</p>
    </>
  );
}

export default App;
