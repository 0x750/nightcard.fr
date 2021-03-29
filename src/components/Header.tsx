import './Header.css'

import { useState, useEffect } from 'react';

import {
    Navbar,
    Nav,
    Container,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faInstagram,
    // faYoutube
} from '@fortawesome/free-brands-svg-icons'

import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const Header: React.FunctionComponent = () => {

    let location = useLocation();
    let [navTheme, setNavTheme] = useState<string>('navigation-light');
    let [iconsColor, setIconsColor] = useState<string>('rgba(0, 0, 0, 0.5)');

    useEffect(() => {
        if(location.pathname === '/work') {
            setNavTheme('navigation-dark navbar-dark');
            setIconsColor('rgba(255, 255, 255, 0.5)');
        } else {
            setNavTheme('navigation-light');
            setIconsColor('rgba(0, 0, 0, 0.5)')
        }
    }, [location.pathname]);

    return (
        <Navbar collapseOnSelect className={"justify-content-between fixed-top " + navTheme} expand="sm">
            <Container>
                <Navbar.Brand className="nav-brand"><img className="navbar-logo" src="/logo.svg" alt="logo"/></Navbar.Brand>
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
                            <FontAwesomeIcon icon={faEnvelope}  style={{color: iconsColor}} />
                        </a>
                        {'   '}
                        <a href="https://instagram.com/nightcardproduction" style={{marginRight: "0.5em"}} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{color: iconsColor}} />
                        </a>
                        {'   '}
                        {/* <a href="https://youtube.com" style={{marginRight: "0.5em"}} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} style={{color: "rgba(0, 0, 0, 0.5)"}} />
                        </a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
