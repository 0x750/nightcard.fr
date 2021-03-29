import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import { Fade } from 'react-reveal';
import { LinkContainer } from 'react-router-bootstrap';

import { IMember } from '../data/Members';

import './About.css';

export interface AboutProps extends IMember {
    noMotion: boolean;
    inverse: boolean;
};

const About: React.FunctionComponent<AboutProps> = ({
    slug,
    name,
    bio,
    instagramID,
    photo,
    noMotion,
    inverse
}: AboutProps) =>
    <Container className="about-container">
        <Fade delay={200} duration={noMotion ? 200 : 500}>
            <Row style={{minHeight: '600px'}}>
                <Col md={{span: 4, order: inverse ? 'last' : 'first'}} xs={12}>
                    <img className="about-profile-pic" src={photo} alt={name.short} />
                    {/* <div className="about-pic-name">{name.short}</div> */}
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
                    <blockquote dangerouslySetInnerHTML={{__html: bio}}></blockquote>
                </Col>
            </Row>
        </Fade>
    </Container>

export default About;
