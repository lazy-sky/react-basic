// react-async의 공식 사용법 예시 코드다.
// https://docs.react-async.com/getting-started/usage

import { useAsync } from 'react-async';

// react-async의 useAsync를 사용할 때 파라미터로 넣는 옵션 객체에는 호출할 함수 promiseFn을 넣고,
// 파라미터도 필드 이름과 함께 (customerId) 넣어줘야 한다.

// You can use async/await or any function that returns a Promise
const loadPlayer = async ({ playerId }, { signal }) => {
  const res = await fetch(`/api/players/${playerId}`, { signal });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const MyComponent = () => {
  const { data, error, isPending } = useAsync({
    promiseFn: loadPlayer,
    playerId: 1,
  });
  if (isPending) return 'Loading...';
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <div>
        <strong>Player data:</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  return null;
};

/*
react-async 라이브러리는 꽤나 편하다. 다만 직접 만든 useAsync와 크게 다른 게 없기도 하다. 
어떤 면에서 직접 만든 게 낫기도 하다. 이를테면 Hook의 옵션이 더 간단하다. watch 대신 deps를 사용한다.
반환 값이 배열 형태라 리액트 내장 Hook과 사용성도 더 비슷하다.

반면 react-async의 useAsync는 더 많은 옵션(promiseFn, deferFn, watch...)을 제공하고,
결과 값도 더 다양하다. (run, reload...)
또한 Hook을 직접 만들지 않고 바로 불러와서 사용할 수 있다는 점도 편리하다.

당연하게도 정답은 없고 상황에 맞게 적절히 사용하면 된다. 
오랫동안 유지보수할 프로젝트라면 직접 만들어 사용하는 것을 추천한다. 
*/
