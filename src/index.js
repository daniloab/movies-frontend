import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { history } from './helpers/History'
import Routes from './routes'

ReactDOM.render(
    <Router history={history}>
        <Routes />
    </Router>
    , document.getElementById('root'));
