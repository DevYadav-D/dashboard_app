import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';


function Menu() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark" style={{color: "peru"}}>
            <Container>
                <LinkContainer to = '/'>
                    <Navbar.Brand>Dashboard v3</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to = '/data'><Nav.Link>Data</Nav.Link></LinkContainer>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;