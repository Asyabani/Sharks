import React ,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

class navbar extends React.Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" >
                <img
                src="../assets/Logo.png"
                className="d-inline-block align-top"
                alt="Sharks Logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Benefit</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <Button  variant="warning">Call Us Now</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

export default navbar;