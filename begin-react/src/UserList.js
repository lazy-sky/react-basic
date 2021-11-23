import { useEffect } from 'react'

// useEffect의 첫 번째 파라미터는 함수, 두 번째는 의존값이 들어있는 배열 deps를 넣는다.
// 빈 배열을 넣으면 컴포넌트가 처음 나타날 때만 함수가 호출된다.
function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남')

    // useEffect는 함수를 반환활 수 있는데 이를 cleanup 함수라고 부른다.
    // useEffect에 대한 뒷처리 느낌으로, 컴포넌트가 사라질 때 호출된다.
    return () => {
      console.log('컴포넌트가 화면에서 사라짐')
    }
  }, [])

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