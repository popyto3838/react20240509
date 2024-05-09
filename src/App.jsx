//built-in component : html 의 기본 요소, 태그명 소문자로 시작
//component : 직접만든 요소(태그), 대문

//component 는 return을 가진 함수

function Mycomponent() {
  // return : 화면에 출력할 코드
  return <div>hello component</div>;
}

function MyComp() {
  //jsx 코드 : <div></div>
}

function App() {
  //한줄 주석
  /*
  여러줄 주석
  */

  //component 사용시 종료 태그 생략할 수 없음
  //br 같은 빈 요소는 시작 태그에서 꼭 종료

  return (
    <>
      <div>
        <h1>
          hello
          <br />
          react
        </h1>
        <h1>하이 리액트</h1>
        <h1>안녕 리액트</h1>
        <p>lorem ipsum dolor.</p>
        <Mycomponent />
      </div>
    </>
  );
}

export default App;
