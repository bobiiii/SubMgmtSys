import React, { useState, useEffect } from "react";
import { Form, Button, Tabs, Tab, Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {LoginTab } from "../components/LoginTab"
import { SignUpTab} from "../components/SignUpTab"

export function Login() {
  const [key, setKey] = useState();

  return (
    <Tabs
      // id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="tabs-cs w-75 mx-auto"
    >
    
      <Tab className="w-100" eventKey="login" title="Login">
        <LoginTab />
      </Tab>
      
    
      <Tab   eventKey="SignUp" title="SignUp">

        <SignUpTab />



      </Tab>
    </Tabs>
  );
}

