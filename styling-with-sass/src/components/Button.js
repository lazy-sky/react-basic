import classNames from 'classnames';
import './Button.scss';

// props로 받아와서 객체 안에 집어 넣은 다음, classNames에 포함시켰다.
// 이렇게 하면 outline, fullWidth 값이 true일 때만 해당 클래스가 적용된다.

// 필요한 이벤트가 있을 때마다 매번 onClick, onMouseMove... 등을 넣어주는 건 귀찮다.
// 이를 해결해주는 것이 spread, rest다.
// ...rest는 지정한 props를 제외한 값들을 rest라는 객체에 모아주고,
// {...rest}는 rest 객체 안에 있는 값들을 모두 해당 태그에 설정해준다.

export default function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
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
