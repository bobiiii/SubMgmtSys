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
      className="tabs-cs w-50 mx-auto"
    >
    
      <Tab className="w-" eventKey="login" title="Login">
        <LoginTab />
      </Tab>
      
    
      <Tab tabAttrs={{href:"/abcde"}}  eventKey="SignUp" title="SignUp">

        <SignUpTab />



      </Tab>
    </Tabs>
  );
}

