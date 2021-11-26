import styles from "./CheckBox.module.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import classNames from "classnames/bind";

// classnames의 bind 기능을 사용하면 CSS 클래스 이름일 지정해줄 때 cx('클래스명')과 같은 형식으로 편하게 사용할 수 있다.
// e.g.,
// cx('one', 'two)
// cx('my-component', {condition: true})
// cx('my-component', ['another', 'classnames'])
const cx = classNames.bind(styles);

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={cx("checkbox")}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
