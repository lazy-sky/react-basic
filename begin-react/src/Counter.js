import { useReducer } from 'react';

// useReducer는 useState과는 또 다른 상태 관리 방법이다. 
// 이 Hook을 이용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
// 상태 업데이트 로직을 컴포넌트 바깥에 작성할 수도 있다, 심지어 다른 파일에서까지.

// reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수다.
// reduecer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.

// 사용법은,
// const [state, dispatch] = useReducer(reducer, initialState)
// 여기서 state는 앞으로 컴포넌트에서 사용할 수 있는 상태,
// dispatch는 액션을 발생시키는 함수라 할 수 있다. 
// useReducer의 첫 번째 파라미터는 reducer함수, 두 번째는 초기 상태다.

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'})
  }

  
  const onDecrease = () => {
    dispatch({type: 'DECREMENT'})

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