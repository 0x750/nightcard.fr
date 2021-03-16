import './Home.css';

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

const Home = () =>
    <>
        <video
            className="front-page-video"
            autoPlay
            muted
            loop
        >
            <source src="video.mp4" type="video/mp4"></source>
        </video>

        <article className="presentation-block">
            <Container>
                <Row>
                    <Col xs={12} md={5}><img src="logo.svg" alt="logo" /></Col>
                    <Col xs={12} md={7}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></Col>
                </Row>
            </Container>
        </article>
    </>

export default Home;
