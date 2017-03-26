import React from 'react';
import { changeForm } from '../../containers/AuthPage/actions';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class AuthForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.emitChange = this.emitChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeUsername(e) {
    this.emitChange({ ...this.props.data, username: e.target.value });
  }
  changePassword(e) {
    this.emitChange({ ...this.props.data, password: e.target.value });
  }
  emitChange(newFormState) {
    this.props.onChangeForm(newFormState);
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.props.data.username, this.props.data.password, this.props.userRole);
  }
  render() {
    return (
        <LoginForm className="card">
          <form onSubmit={this.onSubmit} className="p-3">
            <div><h4 className="d-flex justify-content-around mb-5 text-primary">Merchant Login</h4></div>
            <div className="input-group mb-2">
              <div className="input-group-addon"><i className="material-icons">person</i></div>
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" onChange={this.changeUsername}/>
            </div>
            <div className="input-group mb-2">
              <div className="input-group-addon"><i className="material-icons">lock</i></div>
              <input type="password" className="form-control" id="inlineFormInputGroup" placeholder="Password" onChange={this.changePassword}/>
            </div>
            <button type="submit" className="login-button">LOGIN</button>
          </form>
          <div className="login-footer d-flex flex-row justify-content-center mt-4 pt-3"><div className="d-flex flex-column align-items-center"><div>All Rights Reserved.</div><div>For queries contact seasonboy@sb.com</div></div></div>
        </LoginForm>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeForm: (newFormState) => { dispatch(changeForm(newFormState)); },
  };
}
export default connect(null, mapDispatchToProps)(AuthForm);
