import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar className ="justify-content-between" expand="sm">
            <Navbar.Brand>Nightcard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className ="justify-content-between">
                <Nav className="">
                    <LinkContainer to="/" exact>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/work">
                        <Nav.Link>Work</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About us</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Navbar.Text>
                        <a href="mailto:contact@nightcard.fr">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>   <a href="https://instagram.com/nightcardproduction" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>   <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;