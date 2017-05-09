/**
 * Created by intelligrape on 9/5/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/Signup'
render(<Router>
    <div>
        <Link to="/login">Login</Link> >>
        <Link to="/signup">SignUp</Link>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
    </div>
</Router>, document.getElementById('app'));