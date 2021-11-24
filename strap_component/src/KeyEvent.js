const KeyEvent = () => {
  const OnKey = (event, e) => {
    var value = e.target.value;
    console.log("event ", event, " value: ", value);
  };

  return (
    <div>
      onKeyDown:{" "}
      <input type="text" onKeyDown={(e) => OnKey("onKeyDown", e)}></input>
      <br />
      onKeyPress:{" "}
      <input type="text" onKeyPress={(e) => OnKey("onKeyPress", e)} />
      <br />
      onKeyUp: <input type="text" onKeyUp={(e) => OnKey("onKeyUp", e)} />
    </div>
  );
};

export default KeyEvent;