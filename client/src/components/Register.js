import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';



class Register extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
  return (
    

<div className="container">

    <div className="card col-md-4">
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">User Registration</h6>
            <form action="/users/register" method="post">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="form-control" required   />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" required  />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" required  />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" className="form-control" required  />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
    
</div>
   
</div>
    
  );
}
}

export default connect(null, actions)(Register);
