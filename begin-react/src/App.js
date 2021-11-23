import { useState, useRef } from 'react'
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

  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

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

  const onCreate = () => {
    // 나중에 구현할 배열에 항목을 추가하는 로직
    // ...

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
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // id 값을 비교하여 id가 다르다면 그대로 두고, 같다면 active 값을 반전시키도록 구현
  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user))
  }

  // 성능적 문제가 하나 있다. 바로 input의 바꿀때도 함수가 호출된다는 것.
  // 활성 사용자 수를 세는 건, users에 변화가 있을 때만 해야하는데, 
  // input 값이 바뀔 때도 컴포넌트가 리렌더링되므로 불필요하게 호출되고 있다. 
  const count = countActiveUsers(users)

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
