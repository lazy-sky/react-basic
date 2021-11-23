import { useEffect } from 'react'

function User({ user, onRemove, onToggle }) {
  // deps 파라미터를 생략한다면, 컴포넌트가 리렌더링될 때마다 호출된다.
  // 리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링된다.
  // 물론 실제 DOM에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당한다.
  // 하지만 가상 DOM에는 모든걸 다 렌더링하고 있다. 
  useEffect(() => {
    console.log(user)
  })

  return (
    <div>
      <b style={{
        cursor: 'pointer',
        color: user.active ? 'green': 'black'
      }}
      onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b> 
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default UserList