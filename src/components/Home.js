import './Home.css';

const Home = () => {
    return (
        <>
            <video className="front-page-video" autoPlay muted loop>
                <source src="video.mp4" type="video/mp4"></source>
            </video>

            <div className="video-cover" >
                <h1>Nightcard</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h5>
            </div>

            <div className="presentation-block">

            </div>
        </>
    );
}

export default Home;