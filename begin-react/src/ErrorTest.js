import React from 'react';

function ErrorTest({ test }) {
  if (!test) {
    return null;
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