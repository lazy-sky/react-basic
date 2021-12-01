import { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UserContext';

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  // useEffect를 활용하여 id값이 바뀔 때마다 getUser를 호출하도록
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!!</div>;
  if (!user) return <div>유저가 없습니다.</div>;

  const { name, username, email, phone, website } = user;
  return (
    <ul style={{ border: '3px solid red' }}>
      <li>{`name: ${name}`}</li>
      <li>{`username: ${username}`}</li>
      <li>{`email: ${email}`}</li>
      <li>{`phone: ${phone}`}</li>
      <li>{`website: ${website}`}</li>
    </ul>
  );
}

export default User;
