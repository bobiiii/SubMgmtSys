import { useState, useEffect } from "react";

import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {SignUpRedirect , SignUpUserExists} from "./SignUpRedirect"

export function SignUpTab() {
  const navigate = useNavigate()


  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [userExists, setUserExists] = useState(false)
  const [validated, setValidated] = useState(false)


//https://comfortable-gold-belt.cyclic.app/signup
// http://localhost:3000/signup
//fetching data
  async function handleSignup(e) {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() ===  false) {
      e.preventDefault()
      e.stopPropagation();
    }
    setValidated(true);

    const url = "https://comfortable-gold-belt.cyclic.app/signup"
    const methods = {
      method: "POST",
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname,
        lname,
        phone,
        password,
      })
    }
    const addUser = await fetch(url, methods)
    const result = await addUser.text()
    if (addUser.statusText === "OK") {
      setFname("")
        setLname("")
        setPhone()
        setPassword("")
        setRedirect(true)
        setUserExists(false)
        setTimeout(() => {
          navigate("/dashboard")
        },2000);
      }

    if (addUser.status === 403) {
      setUserExists(true)
      setRedirect(false)
      
    }


  
  }


  return (<>
    {redirect ? <SignUpRedirect /> : undefined}
    { userExists ? <SignUpUserExists /> : undefined}
    <Container className=" login-cs w-100 rounded-4 mt-3  p-5 ">
      <Form noValidate validated={validated} onSubmit={handleSignup} className=" mx-auto">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="SignupFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={fname || ""} onChange={e => setFname(e.target.value)} type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="SignupLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control value={lname || ""} onChange={e => setLname(e.target.value)} type="text"
            
            placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="SignupNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control value={phone || "" } onChange={e => setPhone(e.target.value)} 
          
          type="number" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="SignupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password || ""} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

        <Row className="mb-3">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Row>
      </Form>
    </Container>
  </>
  );
}
