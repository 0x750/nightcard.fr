import './WorkFeatured.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const WorkFeatured = ({slug, title, image, description, tags}) =>
    <Container className="work-featured">
        <Row>
            <Col>
                {tags.map((tag, idx) => {
                    return (<><Badge id={idx} variant="light">{tag}</Badge>{' '}</>);
                })}
                <h1><Badge variant="warning">Featured</Badge>{' '}{title}</h1>
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