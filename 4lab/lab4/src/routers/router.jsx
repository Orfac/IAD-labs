import React from 'react';
import { Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import Auth from '../components/Auth/Auth'
import Main from '../components/Main/Main'
import NoMatch from '../components/Util/NoMatch'
import createHistory from 'history/createBrowserHistory'
import store from "../stores/store";

const browserHistory = createHistory();

export default (
    <BrowserRouter>
    <Router history={browserHistory}>
        <Switch>
            <Route exact path='/' component={Auth}/>
            {store === null ||
            store.getState() === null ||
            store.getState().userState === null ||
            store.getState().userState.Authorization === null ? "" : <Route path='/main' component={Main}/>}

            <Route component={NoMatch}/>
        </Switch>     
    </Router>
    </BrowserRouter>
);
