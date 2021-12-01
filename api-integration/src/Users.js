import { useState } from 'react';
import { useUsersState, useUsersDispatch, getUsers } from './UserContext';
import User from './User';

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!!</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <button onClick={fetchData}>다시 불러오기</button>
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
