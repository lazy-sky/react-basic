import axios from 'axios';
import { useAsync } from 'react-async';

// useAsync를 사용할 땐 Promise를 반환하는 함수의 파라미터를 객체 형태로 해야 한다.
async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.data;
}

function User({ id }) {
  const {
    isLoading,
    data: user,
    error,
  } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });

  if (isLoading) return <div>로딩중...</div>;
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
