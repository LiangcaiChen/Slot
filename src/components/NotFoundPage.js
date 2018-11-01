import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                404 - <Link to="/">Go home</Link>
            </div>
        )
    }
}

export default NotFoundPage;