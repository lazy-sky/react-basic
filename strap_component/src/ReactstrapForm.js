import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const ReactstrapFrom = () => {
  return (
    <div>
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>Woman</option>
          <option>Man</option>
        </Input>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="address">address</Label>
              <Input type="text" name="address" id="address"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="mobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="age">age</Label>
              <Input type="number" name="age" id="age"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ReactstrapFrom;