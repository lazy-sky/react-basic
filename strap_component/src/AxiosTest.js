import { useEffect, useState } from "react";
import axios from "axios";

const AxiosTest = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(JSON.stringify(response));
      });
  }, []);

  return (
    <div>
      <h3>{data}</h3>
    </div>
  );
};

export default AxiosTest;