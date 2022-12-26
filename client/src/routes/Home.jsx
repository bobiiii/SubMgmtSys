import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Data} from "../components/Data"

function Home() {
  
  
  return (
    <Row xs={1} md={2} className="g-4">
        {Data.map((details, key)=>{
          return(
        <Col key={key}>
          <Card className="p-2 m-2 "  >
            <Card.Img variant="top" src={details.img} />
            <Card.Body className="d-flex flex-column align-items-center text-justify" >
              
              <Card.Title >{details.title}</Card.Title>
              <Card.Text className="svc-cards-cs">
                {details.desc}
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              
            </Card.Body>
            <Button>Buy Now</Button>
            </Card>
        </Col>
      )})}
    </Row>
  );
}

export default Home;