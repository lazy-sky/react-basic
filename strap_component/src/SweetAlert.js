import { useEffect } from "react";
import SweetAlert from "sweetalert2";

const Sweetalert = () => {
  useEffect(() => {
    SweetAlert.fire("1. SweetAlert").then((result) => {
      alert("2. result", result.value);
    });
  }, []);
  return (
    <div>
      <h1>SweetAlert</h1>
    </div>
  );
};

export default Sweetalert;