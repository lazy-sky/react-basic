import { useEffect } from 'react'

// 마운트 시에 하는 작업들은 다음과 같다.
// - props로 받은 값을 컴포넌트의 로컬 상태로 설정
// - 외부 API 요청
// - 라이브러리 사용
// - setInterval을 통한 반복 작업 혹은 setTimeout을 통한 작업 예약

// 언마운트 시에 하는 작업은 다음과 같다.
// - setInterval, setTimeout을 사용하여 등록한 작업들 clear
// - 라이브러리 인스턴스 제거

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 값 설정')
    console.log(user)

    return () => {
      console.log('user가 바뀌기 전...')
      console.log(user)
    }
    // deps에 특정 값을 넣게 되면, 컴포넌트가 처음 마운트/언마운트될 때에도 호출되고,
    // 지정한 값이 바뀔 때/바뀌기 직전에도 호출된다. 
  }, [user])

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