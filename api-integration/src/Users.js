import { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from './User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data;
}

function Users() {
  const {
    isLoading,
    data: users,
    error,
    // reload 함수를 사용하면 데이터를 다시 불러올 수 있다.
    reload,
  } = useAsync({ promiseFn: getUsers });

  // 이전에 구현했던 skip처럼 렌더링 시점이 아니라 사용자의 특정 인터랙션에 따라 호출하고 싶을 땐,
  // promiseFn 대신 deferFn을 사용하고 reload 대신 run 함수를 사용하면 된다.
  // const { data: users, error, isLoading, run } = useAsync({
  //   deferFn: getUsers
  // });

  const [userId, setUserId] = useState(null);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!!</div>;
  if (!users) return <button onClick={reload}>불러오기</button>;

  return (
    <>
      <button onClick={reload}>다시 불러오기</button>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setUserId(user.id);
            }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
