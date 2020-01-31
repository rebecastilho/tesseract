import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/index';

export default function Routes() {

    return (
        <Router>
                <Route path="/" exact component={Index} />
        </Router>
    )
}