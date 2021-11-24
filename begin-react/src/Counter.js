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
  
  // 1. constructor에서 bind, 가장 일반적인 방법
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  // 2. 화살표 함수
  // handleIncrease = () => {
  //   console.log('increase');
  //   console.log(this);
  // };

  handleIncrease() {
    console.log('increase');

    console.log(this); // 그냥 쓰면 undefined
    // 버튼에 이벤트로 등록하게 되는 과정에서 각 메서드와 컴포넌트 인스턴스의 관계가 끊기기 때문이다.
    // 해결 방법은 3가지다.
    // 1. constructor에서 bind, 가장 일반적인 방법
    // 2. 화살표 함수, CRA 프로젝트에서는 이 방법을 가장 많이 사용한다. 편하다.
    // 3. onClick에서 새로운 함수를 만들어 전달, 컴포넌트 최적화에 까다로워서 권장되지 않는다.
    // e.g., <button onClick={() => this.handleIncrease()}>+1</button>
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;