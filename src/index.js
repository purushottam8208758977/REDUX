// this file is invoked after index.html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const initialState = {
    count: 0,
    openColorPopUp: false,
    anchorEl: null
};
function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'INCREMENT':
            //console.log("\n\nincrement --->", state.count + 1)
            return {
                count: state.count + 1 // increment
            };
        case 'DECREMENT':
            // console.log("\n\ndecrement --->", state.count - 1)

            return {
                count: state.count - 1 //decrememnt
            };
        case 'RESET':
            // console.log("\n\nRESET --->", state.count)

            return {
                count: 0
            };
        case 'COLORPOPUP': // for opening the color pop up
            console.log("\n\n\topenColorPopUp",state.openColorPopUp)
            return {
                ...state,
                openColorPopUp:true
                
            };
        case 'ANCHOREL': // for opening the color pop up
            console.log("\n\n\tanchorEl",action.value)
            return {
                ...state,
                anchorEl: action.value
            }
        default:
            return state;
    }

    
}

const store = createStore(reducer);
// store.dispatch({ type: "INCREMENT" }) //1
// store.dispatch({ type: "INCREMENT" }) //1+1 = 2  

// store.dispatch({ type: "DECREMENT" }) //2+1=3
// store.dispatch({ type: "RESET" })    //3-1=2
// store.dispatch({ type: "RESET" })    //0
console.log("\n\n\tStore --->", store)






ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));// renders the App component on to the root dom node



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
