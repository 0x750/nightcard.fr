import './Header.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faInstagram,
    // faYoutube
} from '@fortawesome/free-brands-svg-icons'

import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar className ="justify-content-between fixed-top navigation" expand="sm">
            <Navbar.Brand className="nav-brand"><img className="navbar-logo" src="logo.svg" alt="logo"/></Navbar.Brand>
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
                    <a href="mailto:contact@nightcard.fr" style={{marginRight: "0.5em"}}>
                        <FontAwesomeIcon icon={faEnvelope}  style={{color: "rgba(0, 0, 0, 0.5)"}} />
                    </a>   <a href="https://instagram.com/nightcardproduction" style={{marginRight: "0.5em"}} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "rgba(0, 0, 0, 0.5)"}} />
                     </a>   {/* <a href="https://youtube.com" style={{marginRight: "0.5em"}} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} style={{color: "rgba(0, 0, 0, 0.5)"}} />
                    </a> */}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;