import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const refFocus = () => {
    inputRef.current.focus();
  };

  const javascriptFocus = () => {
    document.getElementById("id").focus();
  };

  return (
    <div>
      <input id="id" type="text" ref={inputRef}></input>
      <button type="button" onClick={refFocus}>Ref Focus</button>
      <button type="button" onClick={javascriptFocus}>Javascript Focus</button>
    </div>
  );
};

export default Ref;