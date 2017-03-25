import React from 'react';
import HeaderStyle from './HeaderStyle';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../../containers/AuthPage/actions';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.Logout();
  }
  render() {
    const { addTask } = this.props;
    return (
      <HeaderStyle className="icon-bar">
        <div>
          <Link to="/"><i className="fa fa-tachometer" aria-hidden="true" /></Link>
          <Link to="/user"><i className="fa fa-user-plus" aria-hidden="true" /></Link>
          <a><i className="fa fa-map-o" aria-hidden="true" /></a>
          <a onClick={addTask}><i className="fa fa-puzzle-piece" aria-hidden="true" /></a>
          <a><i className="fa fa-users" aria-hidden="true" /></a>
          <a><i className="fa fa-address-card" aria-hidden="true" /></a>
          <a><i className="fa fa-credit-card" aria-hidden="true" /></a>
          <a><i className="fa fa-toggle-on" aria-hidden="true" /></a>
          <a onClick={this.logout}><i className="fa fa-power-off" aria-hidden="true" /></a>
        </div>
      </HeaderStyle>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Logout: () => { dispatch(logout()); },
  };
}

export default connect(null, mapDispatchToProps)(Header);
