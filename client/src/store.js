import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleWare)));

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...middleWare],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
