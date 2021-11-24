import React, { useMemo, useReducer } from 'react'
import UserList from './UserList';
import CreateUser from './CreateUser';

// 리액트에서 배열이나 객체를 업데이트할 땐 직접 수정하지 않고 불변성을 지켜주며 업데이트해야 한다.
// 대부분의 경우 전개 연산자나 배열 내장 함수를 사용하는 건 어렵지 않지만,
// 데이터의 구조가 까다로워지면 불변성을 지키며 새로운 데이터를 생성해내는 코드가 복잡해진다.
// 이럴 때, immer라는 라이브러리를 사용하면 비교적 깔끔하게 구현할 수 있다.
// Immer는 우리가 상태를 업데이트할 때 불변성을 신경쓰지 않아도 불변성 관리를 대신 해준다.

import produce from 'immer'

// produce 함수의 첫 번째 파라미터는 수정하고 싶은 상태, 두 번째는 업데이트 방식을 정의하는 함수다.
// 두 번째 파라미터 함수에서는 불변성에 대해서 신경쓰지 않고 그냥 업데이트하면 알아서 처리해준다.

// 한편 그렇다고 해서 Immer가 만능은 아니다. 오히려 코드가 길어지게 하는 업데이트가 있다.
// 이를테면 현재 프로젝트에서 users 배열은 객체의 깊은 곳에 있지 않기 때문에 concat, filter가 더 짧고 편하다.
// 다만 사용법을 익혀보기 위해 적용해보고자 한다.

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length
}

const initialState = {
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      // return {
      //   users: state.users.concat(action.user)
      // }
      return produce(state, draft => {
        draft.users.push(action.user);
      })

    // TOGGLE 정도를 제외하곤 오히려 이전이 낫다. 그러니 실제 상황에선 필요할 때만 적용하면 된다.
    case 'TOGGLE_USER':
      // return {
      //   ...state,
      //   users: state.users.map(
      //     user => user.id === action.id
      //     ? { ...user, active: !user.active}
      //     : user)
      // }
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
    case 'REMOVE_USER':
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
    default:
      return state
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  

  const [state, dispatch] = useReducer(reducer, initialState)
  const { users } = state
  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
