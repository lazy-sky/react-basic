import { createContext, useReducer, useContext } from 'react';

// UsersContext에서 사용할 기본 상태
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },

  user: {
    loading: false,
    data: null,
    error: null,
  },
};

// 로딩중, 성공, 실패했을 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error,
});

// 위에서 생성한 객체, 유틸 함수들을 사용하여 리듀서 작성
function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };

    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };

    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error),
      };

    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      };

    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// State와 Dispatch를 위한 Context 각각 생성
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

// State, Dispatch를 쉽게 조회할 수 있는 커스텀 훅
export function useUsersState() {
  const state = useContext(UsersStateContext);

  if (!state) {
    throw new Error('Cannot fing UserProvider');
  }

  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);

  if (!dispatch) {
    throw new Error('Cannot fing UserProvider');
  }

  return dispatch;
}
