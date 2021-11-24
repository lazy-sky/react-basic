import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";

const ReactstrapCollapse = () => {
  return (
    <div>
      <Button color="warning" id="toggle">
        펼치기/접기
      </Button>
      <UncontrolledCollapse toggler="#toggle">
        <Card>
          <CardBody>펼쳐진 부분</CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default ReactstrapCollapse;