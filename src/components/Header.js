import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar className ="justify-content-between">
            <Navbar.Brand>Nightcard</Navbar.Brand>
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
            <Nav className="">
                <Nav.Link disabled>Contact : </Nav.Link>
                <NavLink href="mailto:contact@nightcard.fr"><FontAwesomeIcon icon={faEnvelope} /></NavLink>
                <NavLink href="https://instagram.com/nightcardproduction" target="_blank"><FontAwesomeIcon icon={faInstagram} /></NavLink>
            </Nav>
        </Navbar>
    );
}

export default Header;