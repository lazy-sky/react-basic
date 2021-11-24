import $ from "jquery";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";

const C01_Jquery = () => {
  const inputAlert = (e) => {
    var input_val = $("#inputId").val();
    alert(input_val);
  };
  return (
    <div>
      <div>
        <h6>[This is jQuery]</h6>
        <FormGroup>
          <Row>
            <Col md="10">
              <Input id="inputId" name="inputName"></Input>
            </Col>
            <Col md="2">
              <Button id="buttonId" onClick={(e) => inputAlert(e)}>
                jQuery
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </div>
    </div>
  );
};

export default C01_Jquery;