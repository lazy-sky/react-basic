const OnMouseOver = () => {
  const MouseOver = (tag) => {
    console.log("tag", tag);
  };

  return (
    <div>
      <div onMouseOver={(e) => MouseOver("div")}>
        <h3> OnMouseOver </h3>
      </div>
      <input type="text" onMouseOver={(e) => MouseOver("input")}></input>
      <select onMouseOver={(e) => MouseOver("select")}>
        <option value="react">react</option>
        <option value="sutdy">study</option>
      </select>
    </div>
  );
};

export default OnMouseOver;