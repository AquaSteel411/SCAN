import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware]
})

export default store;