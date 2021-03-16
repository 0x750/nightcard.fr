import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Row,
    Col,
    // Badge,
} from 'react-bootstrap';

import { Fade } from 'react-reveal';
import { LinkContainer } from 'react-router-bootstrap';

import './About.css';

const About = ({noMotion, slug, name, bio, instagramID, photo, inverse}) =>
    <Container className="about-container">
        <Fade bottom delay={200} duration={noMotion ? 0 : 500}>
            <Row style={{minHeight: '600px'}}>
                <Col md={{span: 4, order: inverse ? 'last' : 'first'}} xs={12}>
                    <img className="about-profile-pic" src={photo} alt={name} />
                    <div className="about-pic-name">{name.short}</div>
                </Col>
                <Col md={8} xs={12} className="about-text">
                    <LinkContainer to={`/about/${slug}`}>
                        <h1>{name.full}</h1>
                    </LinkContainer>
                    <p>
                        <FontAwesomeIcon icon={faInstagram} />{' '}
                        <a
                            style={{color: "#212529"}}
                            href={`https://instagram.com/${instagramID}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            @{instagramID}
                        </a>
                    </p>
                    <p>Titre ou fonction</p>
                    <blockquote>{bio}</blockquote>
                </Col>
            </Row>
        </Fade>
    </Container>

export default About;
