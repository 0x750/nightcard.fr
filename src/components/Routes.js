import Test from './Test';
import Home from './Home';
import AboutFull from './About/AboutFull';
import WorkFull from './Work/WorkFull';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = () =>
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/about'>
            <AboutFull />
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
