import './WorkFeatured.css';

import {
    Container,
    Row,
    Col,
    // Badge,
} from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

const WorkFeatured = ({color, slug, title, image, description, tags}) =>
    <Container style={{backgroundColor: color}} className="work-featured">
        <Row>
            <Col md={5} xs={12}>
                <video
                    className="featured-video"
                    autoPlay
                    playsInline
                    muted
                    defaultMuted
                    loop
                >
                    <source src={image} type="video/mp4"></source>
                </video>
            </Col>
            <Col md={7} xs={12}>
                <h1>
                    {title}
                </h1>
            </Col>
        </Row>
        <Row>
            <p>
                {description}
            </p>
        </Row>
    </Container>

export default WorkFeatured;