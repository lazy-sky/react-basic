import { useState } from 'react'

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  })
  
  const { name, nickname } = inputs 
  
  const onChange = e => {
    console.log(e.target)
    const { value, name } = e.target

    // 여러 개의 input 상태를 관리하기 위해서는 값을 직접 수정하는 것이 아니라,
    // 새로운 객체를 만들어 새로운 객체에 변화를 주고, 이를 상태로 사용해야 한다.
    // 아래와 같은 작업을 통해 불변성을 지키고, 리액트가 상태를 감지할 수 있게 한다.
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
  }

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name}/>    
      <input name="nickname" placeholder="닉네임"onChange={onChange} value={nickname}/>    
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample