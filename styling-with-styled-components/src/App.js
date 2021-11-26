import styled from "styled-components";

// 이렇게 스타일을 입력함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다.
// input을 스타일링하고 싶다면 styled.input과 같은 식으로.
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
`;

function App() {
  return (
    <>
      <Circle />
      <Circle color="blue" />
      <Circle color="red" />
    </>
  );
}

export default App;
