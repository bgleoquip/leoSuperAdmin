import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import registerServiceWorker  from './serviceWorker';

import App from './components/App';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DashBoard from './components/Dashboard';
import reducres from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducres,{}, applyMiddleware(reduxThunk))}>
    <BrowserRouter> 
        <App >
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/dashboard" component={DashBoard} />
        </App>
    </BrowserRouter>
    </Provider>
, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
