## CSS in JS

이 기술은 말그대로 JS 안에 CSS를 작성하는 것이다. 이를 구현한 라이브러리 중 가장 널리 쓰이는 것은 styled-components다. 이밖에도 emotion과 styled-jsx가 있다.

### Tagged Template Literal

ES6의 템플릿 리터럴 문법은 이미 익숙하다. 그런데 템플릿 리터럴 안에 `${}` 안에 일반 문자열이나 숫자가 아닌 객체를 넣는다면 어떻게 될까? 혹은 함수를 넣는다면 어떻게 될까?

```js
const object = { a: 1 };
const text = `${object}`;
console.log(text); // "[object Object]"

const fn = () => true;
const msg = `${fn}`;
console.log(msg); // "() => true"
```

템플릿 리터럴을 사용하면서도, 그 내부에 넣은 자바스크립트 값을 조회하고 싶을 땐 태그드 템플릿 리터럴 문법을 사용할 수 있다.

```js
const red = "빨간색";
const blue = "파란색";

function favoriteColors(texts, ...values) {
  console.log(texts);
  console.log(values);
}

favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`;
```

```js
const red = "빨간색";
const blue = "파란색";

function favoriteColors(texts, ...values) {
  return texts.reduce(
    (result, text, i) =>
      `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ""}`,
    ""
  );
}

favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`; // 제가 좋아하는 색은 <b>빨간색</b>과 <b>파란색</b>입니다.
```

다소 복잡한데 다행히도 이런 문법이 있다고 알아두는 정도면 충분하다.

styled-components에서는 이런 문법을 사용해서 컴포넌트의 props를 읽어오기도 한다.

e.g.,

```js
const StyledDiv = styled`
  background: ${(props) => props.color};
`;
```
