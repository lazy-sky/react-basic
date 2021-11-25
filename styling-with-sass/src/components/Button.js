import classNames from 'classnames';
import './Button.scss';

export default function Button({ children, size }) {
  return <button className={classNames('Button', size)}>{children}</button>;
}

// className에 CSS 클래스 이름을 동적으로 넣는 방법
// 1. className={['Button', size].join(' ')}
// 2. className={`Button ${size}`}
// 3. 조건부로 CSS 클래스를 넣어주고 싶을 땐 위와 같이 문자열을 직접 조합하는 것보단,
// classnames 라이브러리를 사용하는 것이 더 편하다.

Button.defaultProps = {
  size: 'medium',
};
