import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export function LoginTab() {
    //State variable
    const [loginPhone, setLoginPhone] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
  
    //Navigation Hook
    const navigate = useNavigate()
  
  
  
  
    async function handleLogin(e) {
  
      console.log("btn workng")
      await fetch("http://localhost:3000/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: loginPhone,
          password: loginPassword,
        }),
      }
      ).then(res => loginAuth(res))
  
      //function to navigate user if User Exist
      async function loginAuth(res) {
        //getting res as object
        //console.log(res)
        //getting data as json received from server
        // const data = await res.text()
        // console.log(data)
        if (res.statusText === "OK") {
          navigate("/dashboard")
        } else {
          navigate("/login")
          console.log("Not Reg User from Client " + res.status)
          setLoginPhone("")
          setLoginPassword("")
        }
      }
  
      //  function loginSuccess(data){
      // await fetch("http://localhost:3000/login").then(async(res)=>{
      //   const result= await res.text()
      //   console.log(`abc func ${result}`)
      //   navigate("/dashboard")
      // })
      // console.log(data)
  
  
      // }
  
  
    }
  
    // function ano(){
    //   console.log("abc")
    // }
  
  
  
  
    return (
      <Container className=" login-cs w-75 rounded-4 mt-3  p-5 ">
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3" controlId="loginPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={loginPhone}
              onChange={(e) => {
                setLoginPhone(e.target.value);
              }}
              name="phone"
              type="number"
              placeholder="Enter Phone Number"
            />
            <Form.Text className="text-muted">
              You have to enter your number to Log-In
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              name="pass"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button as={Link} onClick={handleLogin} className=" w-100" lg={"w-50"} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
  
  