const OnMouseMove = () => {
  const MouseMove = (tag) => {
    console.log("tag", tag);
  };
  return (
    <div>
      <div onMouseMove={(e) => MouseMove("div")}>
        <h3> OnMouseMove </h3>
      </div>
      <input type="text" onMouseMove={(e) => MouseMove("input")}></input>
      <select onMouseMove={(e) => MouseMove("select")}>
        <option value="react">react</option>
        <option value="sutdy">study</option>
      </select>
    </div>
  );
};

export default OnMouseMove;