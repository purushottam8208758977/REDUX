// this file is invoked after index.html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer'

//saga imports
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootSaga from './sagas/saga'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleWare.run(rootSaga)

console.log("\n\n\tStore --->", store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));// renders the App component on to the root dom node

if (module.hot) { module.hot.accept(App); }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
