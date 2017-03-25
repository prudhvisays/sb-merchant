import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SubHeader from './SubHeader';
import { Link } from 'react-router';
import AppHeaderStyle from './AppHeaderStyle';
import Logo from '../../Assets/logo.png';

class AppHeader extends React.Component {
  render() {
    return (
      <div id="app-header">
            <AppHeaderStyle className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#"><img src={Logo} className="logo"/></a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accounts</a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <div className="mr-sm-2" >Notifications</div>
                        <div className="my-2 my-sm-0">
                            <div className="dropdown">
                                <i className="material-icons dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">account_circle</i>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppHeaderStyle>
      </div>
    );
  }
}
export default AppHeader;
