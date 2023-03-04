import { combineReducers, createStore, applyMiddleware } from 'redux'
import { fakeBookReducer } from './reducers/fakeBookReducer';
import { phimReducer } from './reducers/phimReducer';
import { QLNDReducer } from './reducers/QLNDReducer';


// Cài đặt Middleware
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    // Khai báo reducer
    fakeBookReducer,
    phimReducer,
    QLNDReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));