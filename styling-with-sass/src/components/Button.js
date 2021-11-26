import classNames from 'classnames';
import './Button.scss';

// props로 받아와서 객체 안에 집어 넣은 다음, classNames에 포함시켰다.
// 이렇게 하면 outline, fullWidth 값이 true일 때만 해당 클래스가 적용된다.
export default function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
    >
      {children}
    </button>
  );
}

// className에 CSS 클래스 이름을 동적으로 넣는 방법
// 1. className={['Button', size].join(' ')}
// 2. className={`Button ${size}`}
// 3. 조건부로 CSS 클래스를 넣어주고 싶을 땐 위와 같이 문자열을 직접 조합하는 것보단,
// classnames 라이브러리를 사용하는 것이 더 편하다.

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};
