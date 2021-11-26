import styled, { css } from "styled-components";

// 이렇게 스타일을 입력함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다.
// input을 스타일링하고 싶다면 styled.input과 같은 식으로.
// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${(props) => props.color || "black"};
//   border-radius: 50%;
// `;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    /* 이런 식으로 여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 css를 사용해야 한다. 
    css를 불러와서 사용해야 그 스타일 내부에서도 다른 props를 조회할 수 있다. */
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return (
    <>
      <Circle />
      <Circle color="blue" />
      <Circle color="red" />
      <Circle color="red" huge />
    </>
  );
}

export default App;
