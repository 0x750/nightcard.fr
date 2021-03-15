import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './About.css';

const About = ({name, bio, instagramID, photo, inverse}) =>
    <Container className="about-container">
        <Row>
            <Col md={{span: 4, order: inverse ? 'last' : 'first'}} xs={12}>
                <img className="about-profile-pic" src={photo} alt={name} />
                <div className="about-pic-name">{name.short}</div>
            </Col>
            <Col md={8} xs={12} className="about-text">
                <h1>{name.full}</h1>
                <blockquote>{bio}</blockquote>
            </Col>
        </Row>
    </Container>

export default About;