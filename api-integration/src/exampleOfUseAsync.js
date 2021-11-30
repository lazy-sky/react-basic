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
