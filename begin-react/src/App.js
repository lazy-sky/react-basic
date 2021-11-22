// useRef의 또 다른 역할
// 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리
// useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다.
// 이를 활용하여 다음과 같은 값을 관리할 수 있다.
// - setTimeout, setInterval을 통해서 만들어진 id
// - 외부 라이브러리를 사용하여 생성된 인스턴스
// - scroll 위치

import { useRef } from 'react'
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]

  const nextId = useRef(4)

  const onCreate = () => {
    // 나중에 구현할 배열에 항목을 추가하는 로직
    // ...

    nextId.current += 1
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
