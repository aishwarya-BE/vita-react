
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand as={link} to="/">
                Briyani House
            </Navbar.Brand>

            <Nav className="ms-auto">
                <Nav.Link as={Link} to ="/">Home</Nav.Link>
                <Nav.Link as={Link} to ="/">Menu</Nav.Link>
                <Nav.Link as={Link} to ="/">About</Nav.Link>
            </Nav>
        </Navbar>
    );

}
