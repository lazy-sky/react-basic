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

  // useMemo가 특정 결과값을 재사용하는 Hook이라면, useCallback은 특정 함수를 재사용하는 Hook이다.
  // 기존의 onChange, onRemove, onToggle은 컴포넌트가 리렌더링될 때마다 새로 만들어졌다.
  // 물론 함수 선언 자체가 크게 성능을 저하시키지는 않는다. 하지만 재사용은 여전히 중요하다.
  // 왜냐하면 나중에 컴포넌트에서 props가 바뀌지 않으면 가상 DOM에 새로 렌더링하는 것조차 하지 않고,
  // 컴포넌트의 결과물을 재사용하는 최적화 작업에 필수적이기 때문이다.
  // 사용시 주의할 점은 함수 안에서 사용하는 상태 혹은 props가 있다면 꼭 deps에 포함시켜야 한다는 것이다.
  // 그렇게 하지 않으면 함수 내에서 해당 값들을 참조할 때 최신 값을 참조할 것이라는 보장이 없다. 
  // props로 받아온 함수 또한 넣어줘야 한다.
  
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }, [inputs])

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
  }, [users, username, email]) 

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id))
  }, [users]) 

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id ? { ...user, active: !user.active } : user
    ))
  }, [users]) 


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
