import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import Login from './Login/Login'
import Vote from './Vote/Vote'
import Thanks from './Thanks/Thanks';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/login" component={Login} />
       <Route path="/vote" component={Vote} />
       <Route path="/thanks" component={Thanks} />
       <Route path="/" component={Login} />
     </Switch>
   </Router>
  );
}

export default App;
