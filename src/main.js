/**
 * Created by intelligrape on 9/5/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home'
render(<Router>
    <div>
        <Link to="/home">Home</Link>
        <Route path="/home" component={Home}/>
    </div>
</Router>, document.getElementById('app'));