import About, { AboutProps } from './About';

import './AboutDisplay.css';

const AboutDisplay: React.FunctionComponent<AboutProps> = (props: AboutProps) =>
    <div className="about-display">
        <About {...props} noMotion/>
    </div> 

export default AboutDisplay;