function App() {
  const name = "강인";
  const position = "미드필더";
  const salary = 30;

  return (
    <div>
      <p>
        {position} {name}의 연봉은 {salary}억입니다 아시겠나요
      </p>
    </div>
  );
}

export default App;
