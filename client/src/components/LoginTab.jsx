import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginWrong, {LoginUserNotExist} from "./LoginWrong"


export function LoginTab() {
    //State variable
    const [loginPhone, setLoginPhone] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginWrongMsg, setLoginWrongMsg] = useState(false);
    const [userNotExist, setUserNotExist] = useState(false);
  
    //Navigation Hook
    const navigate = useNavigate()
  
    // https://comfortable-gold-belt.cyclic.app/login
  // http://localhost:3000/login
      
    async function handleLogin(e) {
      e.preventDefault()
      const url = "http://localhost:3000/login"
      const method= {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone: loginPhone,
          password: loginPassword,
        })
      }
      const res = await fetch(url,method )
      if (res.ok) {
        navigate("/dashboard")
      }else if(res.status === 403){
        navigate("/login")
        
        setUserNotExist(false)
        setLoginWrongMsg(true)
        setLoginPhone("")
        setLoginPassword("")
      } else if(res.status === 404){

        navigate("/login")
        setUserNotExist(true)
        setLoginWrongMsg(false)
        setLoginPhone("")
        setLoginPassword("")
        
      }
      else
      
      {
        navigate("/login")
        setUserNotExist(true)
        setLoginWrongMsg(false)
        setLoginPhone("")
        setLoginPassword("")
        
      }
      
    }
    return (<>
    {userNotExist ? < LoginUserNotExist/> : undefined}
    {loginWrongMsg ? < LoginWrong/> : undefined}
    
      <Container className=" login-cs w-100 rounded-4 mt-3  p-5 ">
        <Form onSubmit={handleLogin}  className="w-75 mx-auto">
          <Form.Group className="mb-3 " controlId="loginPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={loginPhone}
              onChange={(e) => {
                setLoginPhone(e.target.value);
              }}
              name="phone"
              type="number"
              placeholder="Enter Phone Number"
              required
              
            />
            <Form.Text className="text-muted">
              Ex: 03060125220
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
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button    className=" w-100" lg={"w-50"} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </>
    );
  }
  
  