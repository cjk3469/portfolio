
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import img1 from "../assets/rjeworjwe.png";

function CardList() {

  return (
    <Card style={{backgroundColor: "orange", width: "18rem" }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>포트폴리오 타이틀</Card.Title>
        <Card.Text>포트폴리오 설명</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">Go to</Button>
        <Button variant="danger">git</Button>
      </Card.Body>
    </Card>
  );
}
export default CardList;
