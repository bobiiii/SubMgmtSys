import { useState, useEffect } from "react";

import { Form, Button,  Col, Row, Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SignUpRedirect from "./SignUpRedirect"

export function SignUpTab() {
  const navigate =useNavigate()
  console.log("runs")

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
  

    
    async function  handleSignup(e) {
         e.preventDefault()
         const url=  "http://localhost:3000/signup"
         const methods= {
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
         const addUser = await fetch(url, methods )
         const result = await addUser.text()
        console.log(result)
         if (addUser.statusText === "OK") {
          setRedirect(true)
          // setTimeout(() => {
            
          //   navigate("/login")
          // }, 3000);
        }

        //  const userAdded = await addUser.then(async(res)=>
        //   {
        //     const data= await res.text() 
        //     console.log(data)
        //     console.log(res)  
         
        //   })
        
      }
    
  
  
    // async function  handleSignup(e) {
    //   e.preventDefault()
    //    await fetch("http://localhost:3000/signup", {
    //     method: "POST",
    //     mode: "cors",
    //     cache: "default",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       fname,
    //       lname,
    //       phone,
    //       password,
    //     })
    //   }).then(async(res)=>
    //     {
    //       const data= await res.text() 
    //       console.log(data)
    //       console.log(res)  
    //     if (res.statusText === "OK") {
          
    //       navigate("/login")
    //       console.log("if wala statement")
    //     }
    //     })
      
    // }

    return (<>
    {redirect ? <SignUpRedirect/> : undefined}
      <Container className=" login-cs w-75 rounded-4 mt-3  p-5 ">
        <Form onSubmit={handleSignup} className=" mx-auto">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="SignupFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control value={fname || ""} onChange={e => setFname(e.target.value)} type="text" placeholder="Enter First Name" />
            </Form.Group>
  
            <Form.Group as={Col} controlId="SignupLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control value={lname || ""} onChange={e => setLname(e.target.value)} type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </Row>
  
          <Form.Group className="mb-3" controlId="SignupNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={phone || ""} onChange={e => setPhone(e.target.value)} type="number" placeholder="Enter Phone Number" />
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
  