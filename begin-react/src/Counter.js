import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  // 함수형 업데이트
  // 기존 값을 어떻게 업데이트할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트할 수 있다.
  // 이는 컴포넌트 최적화와 관련이 있는데 일단은 이런 게 있다는 것만 알아두자.
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  
  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;