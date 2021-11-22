function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px'
  }

  return (
    <div style={style}>
      {/* 내부의 내용이 보여지게 하기 위해서는 Wrapper에서 props.children을 렌더링해줘야 한다. */}
      {children}
    </div>
  )
}

export default Wrapper