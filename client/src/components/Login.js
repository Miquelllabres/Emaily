import React, { Component } from 'react';
// import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';



class Login extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
  return (
    



<div className=" row mx-auto">
<div className="card col-md-6">
  <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">User Login</h6>
    <form action="/users/login" method="post">
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="form-control" autoFocus required  />
    </div>
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="form-control" required />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    </form>
  </div>
</div>
<div className="card col-md-6">
 <a href="/auth/google">Login With Google</a>
</div>
 
    
</div>
   

    
  );
}
}

export default connect(null, actions)(Login);
