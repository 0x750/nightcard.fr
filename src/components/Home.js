import './Home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <>
            <video className="front-page-video" autoPlay muted loop>
                <source src="video.mp4" type="video/mp4"></source>
            </video>

            {/* <div className="video-cover" >
                <h1>Nightcard</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h5>
            </div> */}

            <Container fluid className="presentation-block">
                <Row>
                    <Col xs={12} md={5}><img src="logo.svg" alt="logo" /></Col>
                    <Col xs={12} md={7}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></Col>
                </Row>
            </Container>



        </>
    );
}

export default Home;