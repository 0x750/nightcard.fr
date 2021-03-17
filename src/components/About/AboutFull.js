import { Container } from 'react-bootstrap';
import { Members } from '../data/Members';
import About from './About'

import './AboutFull.css';

const AboutFull = () =>
    <article className="aboutAll">
        <Container>
            <h1>About Nightcard</h1>
            <p>on peut mettre un texte avant de citer tout le monde</p>
        </Container>
        {Members.map((member, idx) => <About key={idx} inverse={idx % 2} {...member}/>)}
    </article>

export default AboutFull;