import { useEffect } from "react";

const PromiseThen = () => {
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve("react");
      }, 1500);
    })
      .then(function (result) {
        console.log(result);
        return result + " study";
      })
      .then((result) => {
        console.log("last ", result);
      });
  }, []);
  
  return (
    <div>
      <h1>Promise</h1>
    </div>
  );
};

export default PromiseThen;