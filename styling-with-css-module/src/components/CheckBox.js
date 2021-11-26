import styles from "./CheckBox.module.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

function CheckBox({ children, checked, ...rest }) {
  const { checkbox, icon } = styles;

  return (
    <div className={checkbox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={icon}>
          {checked ? (
            <MdCheckBox className={styles.checked} />
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
