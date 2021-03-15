import './WorkFull.css';

import WorkFeatured from './WorkFeatured';

import { Work } from '../data/Work';

const WorkFull = () =>
    <article className="workFull">
        <WorkFeatured {...Work[0]} />
    </article>

export default WorkFull;