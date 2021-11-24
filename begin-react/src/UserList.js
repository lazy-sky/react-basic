// UserDispatch Context를 조회하기 위해 useContext 훅을 사용
import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b style={{
        cursor: 'pointer',
        color: user.active ? 'green': 'black'
      }}
      onClick={() => {
        dispatch({
          type: 'TOGGLE_USER',
          id: user.id
        })
      }}
      >
        {user.username}
      </b> 
      <span>{user.email}</span>
      <button onClick={() => {
        dispatch({
          type: 'REMOVE_USER',
          id: user.id
        })
      }}
      >
          삭제
      </button>
    </div>
  )
})

// App에서 구현된 onToggle, onRemove는 UserList를 통해 User로 전달되고 있다.
// 여기서 UserList는 함수를 전달하는 중간 다리 역할만 하고 있다. 직접 사용도 하지 않는다.
// 이렇게 특정 함수를 특정 컴포넌트를 거쳐 원하는 컴포넌트에게 전달하는 작업은 흔히 발생한다.
// 지금처럼 하나를 거쳐 전달하는 건 크게 불편하지 않지만, 만약 여러 개의 컴포넌트를 거쳐 전달해야 한다면 이는 매우 번거롭다.
// 그럴 땐 Context API와 dispatch를 함께 사용하면 이러한 복잡한 구조를 해결할 수 있다.

// Context API를 사용하면 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리할 수 있다.
// 이 값은 상태일 수도 있고, 함수, 혹은 외부 라이브러리 심지어는 DOM일 수도 있다.

// 사용법:
// const UserDispatch = React.createContext(null)
// 파라미터에는 Context의 기본값을 설정할 수 있다. (Context를 쓸 때 값을 지정하지 않을 경우 사용되는 기본값)
// Context를 만들면 그 안에 Provider라는 컴포넌트가 들어있는데 이 컴포넌트를 통해 Context의 값을 정할 수 있다.
// <UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
// 이렇게 설정하면 Provider에 의해 감싸진 컴포넌트 어디서든지 Context의 값을 다른 곳에서 조회할 수 있다.

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}

export default React.memo(UserList)