import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import './styles/base/_basee.scss';
import configureStore from './store/configureStore';
import {addSlot} from './actions/slots';
import {Provider} from 'react-redux';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(addSlot({
    description: 'Java Homework',
    finishDate: 10000,
    percentageFinished: 44,
    expectedFinishTime: 4
}));

store.dispatch(addSlot({
    description: "Linda's birthday",
    finishDate: 10000
}));

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
