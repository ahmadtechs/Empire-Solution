import React, {Component} from 'react';
import Home from './components/Home';
import SignIn from './components/Forms/SignIn'
import ForgotenPaswd from './components/Forms/ForgotenPaswd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Loaders from './components/Exercises/Loaders'

class App extends Component {
  render(){
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Password" component={ForgotenPaswd}/>
      <Route path="/Loader" component={Loaders}/>
    </Switch>
  </BrowserRouter>
  );
}
}  
export default App;


