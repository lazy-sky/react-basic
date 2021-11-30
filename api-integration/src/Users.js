import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  // 요청에 대한 상태를 관리할 땐 다음 3가지 상태를 관리해줘야 한다.
  // 1. 요청의 결과
  // 2. 로딩 상태
  // 3. 에러
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청 시작시 error, users를 초기화하고, loading을 true로 바꾼다.
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!!</div>;
  if (!users) return <div>유저가 없습니다.</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
