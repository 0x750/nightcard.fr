import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <img src="logo.svg" alt="logo" />
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
                        <h5 className="text-muted">Instagram</h5>
                        <ul className="list-unstyled text-small">
                            <li><a href="https://www.instagram.com/nighdez/" className="text-muted">@nighdez</a></li>
                            <li><a href="https://www.instagram.com/amilxmub/" className="text-muted">@amilxmub</a></li>
                            <li><a href="https://www.instagram.com/aymericdt/" className="text-muted">@aymericdt</a></li>
                            <li><a href="https://www.instagram.com/carbo1000/" className="text-muted">@carbo1000</a></li>
                            <li><a href="https://www.instagram.com/theobernardet/" className="text-muted">@theobernardet</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;