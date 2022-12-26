import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (
  
    <Navbar  expand="lg" className="header-cs" >
      <Container fluid className='me-4'  >
        <Navbar.Brand as={Link} href="/">SubsMgmtSystem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='color-white' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/`} >
                Home
               </Nav.Link>
                <Nav.Link as={Link} to={`dashboard`} > 
              Dashboard
               </Nav.Link> 
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`contact/12`} >
                
                Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={`login`} > 
             Login
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
  );
}

export default Header;