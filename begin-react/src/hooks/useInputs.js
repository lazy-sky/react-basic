// 컴포넌트를 만들다보면 반복되는 로직이 자주 발생한다. 
// 예를 들어 input을 관리하는 코드는 관리할 때마다 꽤나 비슷한 코드가 반복된다.
// 이러한 상황에선 커스텀 Hook을 만들어 반복되는 로직을 쉽게 재사용할 수 있다.
// 커스텀 Hook은 보통 use라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성하여 만든다.
// 만드는 방법은 그 안에서 useState, useEffect, useReducer, useCallback 등 Hooks를 사용하여,
// 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환하면 된다.

import { useState, useCallback } from 'react'

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm)

  const onChange = useCallback(e => {
    const { name, value } = e.target
    setForm(form => ({
      ...form,
      [name]: value
    }))
  }, [])

  const reset = useCallback(() => setForm(initialForm), [initialForm])

  return [form, onChange, reset] 
}

export default useInputs
