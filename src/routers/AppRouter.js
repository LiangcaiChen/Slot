import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderPage from '../components/HeaderPage';
import ContactPage from '../components/ContactPage';
import AddSlotPage from '../components/AddSlotPage';
import EditSlotPage from '../components/EditSlotPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderPage />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/add" component={AddSlotPage}/>
                <Route path="/edit/:id" component={EditSlotPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;