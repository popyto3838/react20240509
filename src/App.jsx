function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 ->fragment <></> 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Aut mollitia, temporibus?</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Delectus, voluptatibus!</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드 가 여러줄일때는 () 사용 div 안에 감싸기
  return (
    <div>
      hello tag
      <p>Lorem ipsum</p>
      <p>Est,quos?</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
