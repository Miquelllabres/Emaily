import  'materialize-css/dist/css/materialize.min.css';
import  'materialize-css/dist/js/materialize.min.js';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Header extends Component {
	//initiates the nav bar from materialiseCSS
  componentDidMount(){
    const M = window.M;

    document.addEventListener('DOMContentLoaded', function () {

    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});

    });
  }
    
  //returns different output based on user logged in or out
  renderContent(){
    switch (this.props.auth){
      case null:
       return;

      case false:
        return (
          <li><Link to='/login'>Login</Link></li>
          );

      default:
        return (
          <li><a href="/api/logout">Log out</a></li>
          );

    }
  }


	render(){
		return(
			<div>
			 <nav>
    			<div className="nav-wrapper">
     				<a href="/" className="brand-logo">Emaily</a>
      				<a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      				<ul className="right hide-on-med-and-down">
       					

                { this.renderContent() }

      				</ul>
   				 </div>
  			</nav>

  			<ul className="sidenav" id="mobile-demo">
    			<li><a href="/auth/google">Login with Google</a></li>
    			<li><a className="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
   			</ul>
   			</div>
			);
	}
}

function mapStateToProps(state){

  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);