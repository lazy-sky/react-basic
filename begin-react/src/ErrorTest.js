import React from 'react';

function ErrorTest({ test }) {
  if (!test) {
    return null;
    // retrun <div>로딩중</div>;
  }

  return (
    <div>
      <div>
        <b>ID</b>: {test.id}
      </div>
      <div>
        <b>Username</b>: {test.username}
      </div>
    </div>
  );
}

export default ErrorTest;

// 전달해야할 props를 전달하지 않아도 에러가 날 것이다. 
// 이를 방지하기 위해 defaultProps를 설정해줄 수 있다.
ErrorTest.defaultProps = {
  onToggle: () => {
    console.warn('onToggle is missing!');
  }
};

// 다른 방법으로는 PropTypes를 사용하는 것이 있다. 다만 다소 귀찮기 때문에 타입스크립트와 같이 쓰는 것이 권장된다.