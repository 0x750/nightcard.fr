import Test from './Test';
import {Switch, Route} from 'react-router-dom';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Test text="home" />
            </Route>
            <Route path='/About'>
                <Test text="about" />
            </Route>
            <Route path='/category'>
                <Test text="category" />
            </Route>
            <Route path='/products'>
                <Test text="^rpduct" />
            </Route>
            <Route >
                <Test text="default" />
            </Route>
        </Switch>
    );
}

export default Routes;