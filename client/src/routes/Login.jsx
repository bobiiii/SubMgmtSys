import React, { useState, useEffect } from "react";
import {Form ,Button,Tabs, Tab, Col, Row, Container } from "react-bootstrap";


export function Login() {
  const [key, setKey] = useState()

  return (
    <Tabs
      // id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="tabs-cs w-50 mx-auto"
    >
      <Tab className="w-" eventKey="home" title="Login">
        <LoginTab />
      </Tab>
      <Tab eventKey="profile" title="SignUp">
        <SignUp />
      </Tab>
    </Tabs>
  );
}

;

export function LoginTab() {
//   const [apiData, setApiData] = useState([]);
//   useEffect(() => {
// const fetchData= async()=> {
//       const data = await fetch("http://localhost:3000/api");
//       const realData = await data.json();
//       console.log(realData);
//       setApiData(realData);
//     } 
    
//   fetchData()
  
  
    
//   },[])
  
  return (
    <Container className=" login-cs w-75 rounded-4 mt-3  p-5 ">
      
       
      
      <Form method="post" action="http://localhost:5173/"  className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="loginPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phone" type="number" placeholder="Enter Phone Number" />
          <Form.Text className="text-muted"  >
            You have to enter your number to Log-In 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="pass" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className=" w-100" lg={"w-50"} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export function SignUp() {
  return (
    <Container className=" login-cs w-75 rounded-4 mt-3  p-5 ">
    <Form className=" mx-auto">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="SignupFName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="SignupLName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="SignupNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="SignupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>


      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Row className="mb-3">
      
      <Button  variant="primary" type="submit">
        Sign Up
      </Button>
      </Row>
    </Form>
    </Container>
  );
}
