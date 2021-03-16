import About from './About';

import './AboutDisplay.css';

const AboutDisplay = (props) =>
    <div className="about-display">
        <About {...props} noMotion/>
    </div> 

export default AboutDisplay;