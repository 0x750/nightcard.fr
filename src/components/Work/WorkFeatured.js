import './WorkFeatured.css';

import {
    Container,
    Row,
    Col,
    Badge,
} from 'react-bootstrap';

const WorkFeatured = ({slug, title, image, description, tags}) =>
    <Container className="work-featured">
        <Row>
            <Col>
                <Badge variant="warning">Featured</Badge>{' '}
                {tags.map((tag, idx) => <><Badge id={idx} variant="light">{tag}</Badge>{' '}</>)}
                <h1>{title}</h1>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={5}>
                <img src={image} alt="" />
            </Col>
            <Col xs={12} md={7}>
                <p>{description}</p>
            </Col>
        </Row>
    </Container>

export default WorkFeatured;