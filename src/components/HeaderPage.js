import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderPage = () => (
    <div>
        <h1>Slot</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/add" activeClassName="is-active">Create Slot</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>
);

export default HeaderPage;