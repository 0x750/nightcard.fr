import './Footer.css';

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Footer: React.FunctionComponent = () =>
    <footer>
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <img src="/logo.svg" alt="logo" />
                    <small className="text-muted">© 2021 Nightcard</small>
                </Col>
                <Col xs={6} md={4}>
                    <h5 className="text-muted">Navigation</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link className="text-muted" to="/">Home</Link></li>
                        <li><Link className="text-muted" to="/work">Work</Link></li>
                        <li><Link className="text-muted" to="/about">About us</Link></li>
                    </ul>
                </Col>
                <Col xs={6} md={4}>
                    <h5 className="text-muted">Social</h5>
                    <ul className="list-unstyled text-small">
                        <li><a href="mailto:contact@nightcard.fr" className="text-muted">Mail</a></li>
                        <li><a href="https://instagram.com/nightcardproduction" className="text-muted">Instagram</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>

export default Footer;