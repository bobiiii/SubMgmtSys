import { Container, Row, Col, Stack } from "react-bootstrap";
import "./App.css"

function Dashboard() {
  return (<Container fluid className="bg-cs text-white p-4">
      
  <Container className="bg-inner-cs rounded-4 text-center ">
  <Container className="forinner  ">
  <Row className="p-3">
    <Col ><h4 > Details of Your Subscription </h4></Col>
  </Row>
  <Row className="p-2   border-light border-1 border-bottom">
    <Col className="">Subscription Name</Col>
    <Col>NETFLiX</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Valid From</Col>
    <Col>01-12-2022</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Valid Till</Col>
    <Col>30-12-2022</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Payment Status</Col>
    <Col>Paid</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Account Email</Col>
    <Col>random@mail.com</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Account Password</Col>
    <Col>1234567</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Profile/User No</Col>
    <Col>03</Col>
  </Row>
  <Row className="p-2 border-light border-1 border-bottom">
    <Col>Profile/User Pin</Col>
    <Col>4582</Col>
  </Row>
  </Container>
  
  </Container>
</Container>
  )
}

export default Dashboard