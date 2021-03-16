import Test from './Test';
import Home from './Home';
import AboutFull from './About/AboutFull';
import AboutDisplay from './About/AboutDisplay';
import WorkFull from './Work/WorkFull';

import {Switch, Route, Redirect} from 'react-router-dom';

import { Members } from './data/Members';

const Routes = () =>
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/about'>
            <AboutFull />
        </Route>
        <Route exact path='/about/:person'>
            {({match}) => {
                let index = Members.map(a => a.slug).indexOf(match.params.person);
                return index > -1 ? <AboutDisplay {...Members[index]} /> : <Redirect to="/" /> ;
            }}
        </Route>
        <Route exact path='/work'>
            <WorkFull />
        </Route>
        <Route exact path='/work/:id' render={
            ({match}) => <Test text={"Work : " + match.params.id} />
        } />
        <Route path="*">
            <Redirect to="/" />
        </Route>
    </Switch>

export default Routes;
