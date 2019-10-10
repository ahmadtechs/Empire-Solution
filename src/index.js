import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './components/ViewRouters/Routes'
import * as serviceWorker from './serviceWorker';

// const routing = (
    
//     <Router>
//     <Switch>
//     <Route exact path="/SignIn" component={SignIn}/>
//     <Route path="/" compoenent={App}/>
//     </Switch>
//     </Router>
    
//     )
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
