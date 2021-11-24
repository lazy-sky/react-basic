import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const ReactstrapCard = () => {
  return (
    <div>
      <Card>
        <CardImg
          top
          src="https://www.google.co.kr/images/srpr/logo11w.png"
          alt="Card Img"
        ></CardImg>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card SubTitle</CardSubtitle>
          <CardText>내용입니다.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ReactstrapCard;