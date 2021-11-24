import { Button } from "reactstrap";
import Swal from "sweetalert2";

const SweetalertConfirm = () => {
  const confirmAlert = () => {
    Swal.fire({
      title: "정말 확실한겁니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B088A",
      cancelButtonColor: "#01DF01",
      confirmButtonText: "처리하기",
      cancelButtonText: "살려두기",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        document.getElementById("test").remove();
        Swal.fire("처리되었습니다.", "sweetalert2 처리 완료", "success");
      } else {
        Swal.fire("살려드립니다.", "sweetalert2 살려드림", "danger");
      }
    });
  };
  return (
    <div>
      <h1 id="test">제발 살려주세요</h1>
      <Button onClick={confirmAlert}>처리하기</Button>
    </div>
  );
};

export default SweetalertConfirm;