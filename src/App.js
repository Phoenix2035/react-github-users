import React from 'react';
import {Dashboard, Login, PrivateRoute, AuthWrapper, Error} from './pages';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
