import React from 'react';
import { connect } from 'react-redux';
import AuthStyle from './AuthStyle';
import BackgrndStyle from './BackgrndStyle';
import AuthForm from '../../components/AuthForm';
import LoginForm from './LoginForm';
import CurveStyle from './CurveStyle';
import LogoStyles from './LogoStyles';
import LoadingStyle from './LoadingStyle';
import { loginRequest } from '../AuthPage/actions';
import Logo from './logo.png';
import Loading from './loading.gif';

class MerchantPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formState, currentlySending, error } = this.props.data;
    return (
      <BackgrndStyle>
        <CurveStyle className="d-flex flex-column align-items-center justify-content-around">
            {!currentlySending ? <img className="img-logo" src={Logo}/> : <img src={Loading} alt="loading" />}
            {!currentlySending ? <AuthForm data={formState} onSubmit={this.props.login} stateError={error} userRole={'CUSTOMER'} /> : null}
        </CurveStyle>
      </BackgrndStyle>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password, userRole) => { dispatch(loginRequest({ username, password, userRole })); }
  };
}

function mapStateToProps(state) {
  const data = state.get('auth');
  return {
    data,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MerchantPage);
