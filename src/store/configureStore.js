import {createStore, combineReducers} from 'redux';
import slotReducer from '../reducers/slots';

export default () => {
    return createStore(
        combineReducers({
            slots: slotReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};

