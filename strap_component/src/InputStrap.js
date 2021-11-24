import { useState } from 'react';
import { Form, FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";

const InputStrap = () => {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  }

  const checkEmail = (value) => {
    if (/[\w\-\.]+\@[\w\-\.]+/g.test(value)) {
      return false
    }

    return true
  }

  const checkPhone = (value) => {
    if (/\d{2,3}-\d{3,4}-\d{4}/g.test(value)) {
      return false
    }

    return true
  }

  return (
    <Form>
      <FormGroup>
        <Label for="email">Email input</Label>
        <Input 
          onChange={onChange} 
          invalid={checkEmail(inputValue)} 
          valid={!checkEmail(inputValue)}
        />
        <FormFeedback>example@email.com</FormFeedback>
        <FormText>이메일을 입력해주세요.</FormText>
      </FormGroup>

      <FormGroup>
        <Label for="phone">Phone number input</Label>
        <Input 
          onChange={onChange} 
          invalid={checkPhone(inputValue)} 
          valid={!checkPhone(inputValue)}
        />
        <FormFeedback>010-xxxx-xxxx</FormFeedback>
        <FormText>핸드폰 번호를 입력해주세요.</FormText>
      </FormGroup>
    </Form>
  );
};

export default InputStrap;