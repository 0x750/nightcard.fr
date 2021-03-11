import Test from './Test';
import {Switch, Route} from 'react-router-dom';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Test text="home" />
            </Route>
            <Route path='/about'>
                <Test text="about" />
            </Route>
            <Route path='/work'>
                <Test text="work" />
            </Route>
            <Route >
                <Test text="default" />
            </Route>
        </Switch>
    );
}

export default Routes;