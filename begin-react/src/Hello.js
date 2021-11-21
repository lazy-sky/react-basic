import React from 'react'

function Hello({color, name}) {
  return <div style={{color}}>Hello {name}</div>
}

Hello.defaultProps = {
  name: 'NoName'
}

export default Hello