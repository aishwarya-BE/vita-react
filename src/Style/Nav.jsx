
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function Navigation({isLoggedIn, onLogout}) {
    return (
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand as={Link} to="/">
                Briyani House
            </Navbar.Brand>

            <Nav className="ms-auto">
                <Nav.Link as={Link} to ="/">Home</Nav.Link>
                <Nav.Link as={Link} to ="/">Menu</Nav.Link>
                <Nav.Link as={Link} to ="/">About</Nav.Link>


                {isLoggedIn?(
                    <>
                        <Nav.Link as={Link} to ="/dashboard">Dashboard</Nav.Link>

                        <Button
                            variant="danger"
                            size='sm'
                            onClick={onLogout}>
                                Logout
                            </Button>
                    
                    </>
                ):(

                    <Nav.Link as ={Link} to="/login">Login</Nav.Link>
                )
            }
                
                
            </Nav>
        </Navbar>
    );

}
