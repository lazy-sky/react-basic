import { useState, useRef } from 'react'
import UserList from './UserList';
import CreateUser from './CreateUser';

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

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
