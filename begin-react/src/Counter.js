// import { useReducer } from 'react';

// function reducer(state, action) {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({type: 'INCREMENT'})
//   }

  
//   const onDecrease = () => {
//     dispatch({type: 'DECREMENT'})

//   }

//   return (
//     <div>
//       <h1>{ number }</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

import { Component } from 'react';

class Counter extends Component {
  // 보통 클래스에서 커스텀 메서드는 handle... 로 작명한다.
  handleIncrease() {
    console.log('increase');
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button>+1</button>
        <button>-1</button>
      </div>
    );
  }
}

export default Counter;