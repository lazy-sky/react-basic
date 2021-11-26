# CSS Module

리액트 프로젝트에서 컴포넌트를 스타일링할 때 CSS Module을 활용하면 CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있다.
CRA로 만든 프로젝트에서 CSS Module을 사용할 땐, 파일 확장자를, `.module.css`로 하면 된다.

e.g,

### BOX.module.css

```css
.Box {
  background: black;
  color: white;
  padding: 2rem;
}
```

위와 같이 파일을 만들면 컴포넌트 파일에서 해당 CSS 파일을 불러올 때 CSS 파일에 선언한 클래스 이름들이 모두 고유해진다.

### Box.js

```jsx
import React from "react";
import styles from "./Box.module.css";

function Box() {
  return <div className={styles.Box}>{styles.Box}</div>;
}

export default Box;
```

위와 같이 `className`을 설정할 땐 `styles.Box`와 같은 식으로 `import`로 불러온 `styles` 객체 안에 있는 값을 참조해야 한다.
이렇게 하면 클래스 이름에 대하여 고유한 이름(나는 `Box_Box__2aocn`이 나왔음)이 만들어지기 때문에, 실수로 CSS 클래스 이름이 다른 관계 없는 곳에서 사용한 CSS 클래스 이름과 중복되는 일을 방지할 수 있다.
이는 다음과 같은 상황에서 유용하다.

- 레거시 프로젝트에 리액트를 도입할 때
- CSS 클래스를 중복되지 않게 작성하기 위하여 CSS 클래스 네이밍 규칙을 만들기 귀찮을 때
  - 네이밍 규칙 예시
    1. 컴포넌트의 이름은 다른 컴포넌트랑 중복되지 않게 한다.
    2. 컴포넌트의 최상단 CSS 클래스는 컴포넌트의 이름과 일치시킨다. (e.g., `.Button`)
    3. 컴포넌트 내부에서 보여지는 CSS 클래스는 선택자를 잘 활용한다. (e.g., `.MyForm .my-input`)

CSS Module을 사용하기 위해 별도로 설치해야 하는 라이브러리는 없다. 이 기능은 webpack에서 사용하는 css-loader에서 지원되는데, CRA 프로젝트에는 이미 적용되어있다.