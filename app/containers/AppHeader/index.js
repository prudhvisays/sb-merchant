import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SubHeader from './SubHeader';
import { Link } from 'react-router';
import AppHeaderStyle from './AppHeaderStyle';
import Logo from '../../Assets/logo.png';
import Dropdown from '../../components/Dropdown';
import { EnhanceDropdown as enhancer } from '../../components/EnhanceDropdown';
import { logout } from '../AuthPage/actions';

const EnchancedDropdown = enhancer(Dropdown);

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: 0,
            data: ['Profile', 'Logout'],
            isSecondOpen: true
        };
    }

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
                        <div className="mr-sm-2" >Hello Merchant!</div>
                          <EnchancedDropdown
                          className="my-2 my-sm-0"
                          optionSelected={this.state.optionSelected}
                          onSelect={(option) => this.setState({ optionSelected: option})}
                          data={this.state.data}
                          icon={'account_circle'}
                          logout={this.props.logout}
                          />
                    </div>
                </div>
            </AppHeaderStyle>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(logout()); }
    };
}

export default connect(null,mapDispatchToProps)(AppHeader);
