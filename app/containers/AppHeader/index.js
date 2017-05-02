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
import { session } from '../../Api/ApiConstants';

const EnchancedDropdown = enhancer(Dropdown);

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: 0,
            data: [
            {
                title: 'Logout',
                icon: 'exit_to_app',
            },
            ],
            isSecondOpen: true
        };
    }
    componentDidMount() {
      const elem1 = this.headerLogo;
      const elem2 = this.headerMenu;
      elem1.style.opacity = 0;
      elem2.style.opacity = 0;
      window.requestAnimationFrame(function() {
        elem1.style.transition = "opacity 350ms cubic-bezier(0.6, 0.2, 0.1, 1) 100ms";
        elem2.style.transition = "opacity 350ms cubic-bezier(0.6, 0.2, 0.1, 1) 100ms";
        elem1.style.opacity = 1;
        elem2.style.opacity = 1;
      });
    }

  render() {
    return (
      <div id="app-header">
            {/*<AppHeaderStyle className="navbar navbar-toggleable-md">*/}
                {/*<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*<span className="navbar-toggler-icon" />*/}
                {/*</button>*/}
                {/*<Link className="navbar-brand" to="/"><img src={Logo} className="logo" ref={(comp1) => this.headerLogo = comp1}/></Link>*/}
                {/*<div className="collapse navbar-collapse" id="navbarTogglerDemo02" ref={(comp2) => this.headerMenu = comp2}>*/}
                    {/*<ul className="navbar-nav mr-auto mt-2 mt-md-0">*/}
                        {/*<li className="nav-item active">*/}
                            {/*<Link className="nav-link" to="/">Home</Link>*/}
                        {/*</li>*/}
                        {/*/!*<li className="nav-item">*!/*/}
                            {/*/!*<a className="nav-link" href="#">Accounts</a>*!/*/}
                        {/*/!*</li>*!/*/}
                    {/*</ul>*/}
                    {/*<div className="form-inline my-2 my-lg-0">*/}
                        {/*<div className="mr-sm-2 nav-title d-flex">Hello {session() ? session().customer.name : ''}</div>*/}
                          {/*<EnchancedDropdown*/}
                          {/*className="my-2 my-sm-0 nav-title"*/}
                          {/*optionSelected={this.state.optionSelected}*/}
                          {/*onSelect={(option) => this.setState({ optionSelected: option})}*/}
                          {/*data={this.state.data}*/}
                          {/*icon={'account_circle'}*/}
                          {/*logout={this.props.logout}*/}
                          {/*/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</AppHeaderStyle>*/}
        <AppHeaderStyle className="nav justify-content-between">
          <Link className="nav-item my-2 ml-2" to="/"><img src={Logo} className="logo" ref={(comp1) => this.headerLogo = comp1}/></Link>
          <div className="nav-item form-inline my-2 mr-2" ref={(comp2) => this.headerMenu = comp2}>
          <div className="mr-sm-2 nav-title d-flex">Hello {session() ? session().customer.name : ''}</div>
          <EnchancedDropdown
          className="my-2 my-sm-0 nav-title"
          optionSelected={this.state.optionSelected}
          onSelect={(option) => this.setState({ optionSelected: option})}
          data={this.state.data}
          icon={'account_circle'}
          logout={this.props.logout}
          />
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
