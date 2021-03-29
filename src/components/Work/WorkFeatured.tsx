import './WorkFeatured.css';

import {
    Container,
    Row,
    Col,
    // Badge,
} from 'react-bootstrap';

import { IWork } from '../data/Work';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

const WorkFeatured: React.FunctionComponent<IWork> = ({
    color,
    slug,
    title,
    image,
    description,
    tags
}: IWork) =>
    <Container style={{backgroundColor: color}} className="work-featured">
        <Row>
            <Col md={5} xs={12}>
                <video
                    className="featured-video"
                    autoPlay
                    playsInline
                    muted
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