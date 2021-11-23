import { useState, useRef, useMemo, useCallback } from 'react'
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs

  // 함수형 업데이트를 하게 되면, setUsers에 등록하는 콜백함수의 파라미터에서 최신 users를 참조할 수 있다.
  // 그래서 deps에 users를 넣지 않아도 된다.
  // 이로써 특정 항목을 수정하게 될 때, 해당 항목만 리렌더링된다.
  // cf) 리액트 개발자 도구의 버그인지 createUser도 렌더링되는 것처럼 보이는데,
  // 로그를 찍어보면 렌더링 되지 않고 있는 걸 확인할 수 있다.
  
  // 리액트 개발시 useCallback, useMemo, React.memo는 컴포넌트의 성능을 실제로 개선할 수 있는 상황에서만 써야 한다.
  // - 렌더링 최적화하지 않을 컴포넌트에 React.memo를 사용하는 것은 불필요한 props 비교만 하게 한다.

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }, [])

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ])

  const nextId = useRef(4)

  const onCreate = useCallback(() => {
      const user = {
      id: nextId.current,
      username,
      email
    }

    setUsers([...users, user])

    setInputs({
      username: '',
      email: ''
    })

    nextId.current += 1
  }, [username, email]) 

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id))
  }, []) 

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id ? { ...user, active: !user.active } : user
    ))
  }, []) 


  const count = useMemo(()=> countActiveUsers(users), [users])

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
