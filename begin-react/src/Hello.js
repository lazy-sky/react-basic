// function Hello({ color, name, isSpecial }) {
//   return ( 
//     <div style={{color}}>
//       { isSpecial && <b>*</b> }
//       Hello {name}
//     </div>
//   )
// }

// 이제 잘 사용하지는 않지만 만나게 될 때를 대비하여 클래스 컴포넌트에 대해 정리하고자 한다.

// 클래스 컴포넌트에서는 render() 메서드가 꼭 있어야 한다. 이 메서드에서 렌더링하고 싶은 JSX를 반환하면 된다.
// props를 조회할 땐 this.props를 조회하면 된다.
// defaultProps는 함수 컴포넌트와 같은 방식 혹은 클래스 내부 static 키워드로 선언할 수 있다.

import { Component } from 'react';

class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={color}>
        {isSpecial && <b>*</b>}
        Hello {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: 'NoName'
}

export default Hello