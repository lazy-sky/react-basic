// 컨테이너 컴포넌트
// 프레젠테이셔널 컴포넌트(Couter.js)와 달리 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치할 수 있는 컴포넌트
// HTML 태그들을 사용하지 않고 다른 프레젠테이셔널 컴포넌트들을 불러와서 사용한다.

import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  // state의 값은 store.getState() 호출 결과와 같다.
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이다.
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와 액션을 디스패치 하는 함수들을 props로 넣어준다.
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
