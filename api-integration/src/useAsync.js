// 데이터를 요청해야 할 때마다 리듀서를 작성하는 것은 번거롭다.
// 반복되는 코드를 작성하는 대신, 커스텀 Hook을 만들어 요청 상태 관리 로직을 쉽게 재사용할 수 있다.

import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 첫 번째 파라미터는 API 요청을 시작하는 함수,
// 두 번째는 useEffect에서 deps로 활용될 배열, 현재는 불필요하므로(처음 렌더링할 때만 필요하므로) 기본값은 빈 배열.
function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      dispatch({ type: 'ERROR', error });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, fetchData];
}

export default useAsync;
