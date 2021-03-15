import { Members } from './data/Members';
import About from './About'

import './AboutFull.css';

const AboutFull = () => {
    return (
        <article className="aboutAll">
            <p>on peut mettre un texte avant de citer tout le monde</p>
            {Members.map((member, idx) => <About key={idx} inverse={idx % 2} {...member}/>)}
        </article>
    );
}

export default AboutFull;