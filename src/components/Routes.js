import Test from './Test';
import Home from './Home';
import AboutFull from './About/AboutFull';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <AboutFull />
            </Route>
            <Route exact path='/work'>
                <Test text="work all" />
            </Route>
            <Route exact path='/work/:id' render={
                ({match}) => <Test text={"Work : " + match.params.id} />
            } />
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default Routes;