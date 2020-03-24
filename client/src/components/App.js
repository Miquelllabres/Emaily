import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
  return (
    

<div className="container">
<BrowserRouter>
  <div> 
    <Header />
    <Route exact path="/" component={Landing} />
    <Route exact path="/user-dashboard" component={Dashboard} />
    <Route path="/test/new" component={SurveyNew} />
    <Route path="/login" component={Login} />


  </div>
</BrowserRouter>
</div>
    
  );
}
}

export default connect(null, actions)(App);
