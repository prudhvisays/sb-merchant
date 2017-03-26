import React from 'react';
import CreateUserStyle from './CreateUserStyle';
import UserSelect from './UserSelect';
import TeamSelect from './TeamSelect';
import UserMaps from './UserMaps';
import FormInput from './FormInput';
import LoadingSpinner from '../LoadingSpinner'; 
import './user.css';

export default class UserForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
    this.submitFranchise = this.submitFranchise.bind(this);
    this.setSelection = this.setSelection.bind(this);
  }
  onChange(e) {
    this.emitChanges({ ...this.props.stateUserInfo, [e.target.name]: e.target.value });
  }
  emitChanges(newFormState) {
    this.props.onUserFormChange(newFormState);
  }
  setSelection(e) {
    if (e.target.value === 'isAdmin') {
      this.props.onUserFormChange({ ...this.props.stateUserInfo, isAdmin: true, isFranchiseAdmin: false, isManager: false})
    } else if (e.target.value === 'isFranchise') {
      this.props.onUserFormChange({...this.props.stateUserInfo, isAdmin: false, isFranchiseAdmin: true, isManager: false});
    } else if(e.target.value === 'isManager') {
      this.props.onUserFormChange({ ...this.props.stateUserInfo, isAdmin: false, isFranchiseAdmin: false, isManager: true });
    }
  }
  submitFranchise(e) {
    e.preventDefault();
    this.props.createUser();
  }
  render() {
    const { stateUserRequest, stateUserStatus, stateUserTeams, stateUserInfo, onUserFormChange, userCordsChange } = this.props
    return (
      <CreateUserStyle className="formStyle" style={{ height: '75vh', position: 'relative' }}>
    { !stateUserRequest ? (
        <form onSubmit={this.submitFranchise}>
          <div className="ink-flex vertical">
            <div className="BottomMargin">
              <div className="fw-700 sub-title">Create</div>
              <div className="area"><UserSelect userInfo={stateUserInfo} onUserFormChange={onUserFormChange} /></div>
            </div>
            { stateUserInfo.selectAdmin && <div className="BottomMargin">
              <div className="ink-flex">
                <div style={{ marginRight: '1em' }}><input type="radio" id="rb1" name="isAdmin" value="isAdmin" checked={stateUserInfo.isAdmin} onChange={this.setSelection} /><label htmlFor="rb1" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Admin</label></div>
                <div><input type="radio" id="rb2" name="isFranchiseAdmin" value="isFranchise" checked={stateUserInfo.isFranchiseAdmin} onChange={this.setSelection} /><label htmlFor="rb2" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Franchise Admin</label></div>
                <div><input type="radio" id="rb3" name="isManager" value="isManager" checked={stateUserInfo.isManager} onChange={this.setSelection} /><label htmlFor="rb2" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Manager Admin</label></div>
              </div>
            </div> }
            { ((!stateUserInfo.selectAdmin && !stateUserInfo.isFranchiseAdmin && !stateUserInfo.isPilot && !stateUserInfo.isMerchant) || stateUserInfo.isFranchiseAdmin) && <div className="BottomMargin">
              <div className="ink-flex">
                <div className="all-100">
                  <FormInput
                    name={'franchise'}
                    holder={'Enter Franchise Name'}
                    type={'text'} title={'Franchise'}
                    change={this.onChange}
                    value={stateUserInfo.franchise}
                  />
                </div>
              </div>
            </div> }
            { (stateUserInfo.isMerchant || (stateUserInfo.selectAdmin && stateUserInfo.isFranchiseAdmin)) && <div className="BottomMargin">
              <FormInput
                name={'name'}
                holder={'Enter Name'}
                type={'text'}
                title={'Name'}
                change={this.onChange}
                value={stateUserInfo.name}
              />
            </div> }
            { (stateUserInfo.isPilot || stateUserInfo.isMerchant || stateUserInfo.isManager || stateUserInfo.isAdmin || stateUserInfo.isFranchiseAdmin ) && ( <div> <div className="BottomMargin">
              <div className="ink-flex">
                <div className="all-50">
                  <FormInput
                    name={'firstName'}
                    holder={'Enter First Name'}
                    type={'text'}
                    title={'First Name'}
                    change={this.onChange}
                    value={stateUserInfo.firstName}
                  />
                </div>
                <div className="all-50">
                  <FormInput
                    name={'lastName'}
                    holder={'Enter Last Name'}
                    type={'text'}
                    title={'Last Name'}
                    change={this.onChange}
                    value={stateUserInfo.lastName}
                  />
                </div>
              </div>
            </div>
            <div className="BottomMargin">
              <div className="ink-flex">
                <div className="all-100">
                  <FormInput
                    name={'username'}
                    holder={'Enter User Name'}
                    type={'text'}
                    title={'User Name'}
                    change={this.onChange}
                    value={stateUserInfo.username}
                  />
                </div>
              </div>
            </div>
            <div className="BottomMargin">
              <div className="ink-flex">
                <div className="all-50">
                  <FormInput
                    name={'password'}
                    holder={'Enter Password'}
                    type={'password'}
                    title={'Password'}
                    change={this.onChange}
                    value={stateUserInfo.password}
                  />
                </div>
                <div className="all-50">
                  <FormInput
                    name={'confirmPassword'}
                    holder={'Confirm Password'}
                    type={'password'}
                    title={'Confirm Password'}
                    change={this.onChange}
                    value={stateUserInfo.confirmPassword}
                  />
                </div>
              </div>
            </div>
            <div className="BottomMargin">
              <div className="ink-flex">
                <div className="all-50">
                  <FormInput
                    name={'mobileNumber'}
                    holder={'Enter Mobile Number'}
                    type={'text'}
                    title={'Mobile Number'}
                    change={this.onChange}
                    value={stateUserInfo.mobileNumber}
                  />
                </div>
                <div className="all-50">
                  <FormInput
                    name={'emailAddress'}
                    holder={'Enter Email Address'}
                    type={'text'}
                    title={'Email Address'}
                    change={this.onChange}
                    value={stateUserInfo.emailAddress}
                  />
                </div>
              </div>
            </div> </div>)}
            <div className="BottomMargin">
              <div className="fw-700 sub-title">Location</div>
              <div className="area"><UserMaps userCordsChange={userCordsChange} /></div>
            </div>
            { (stateUserInfo.isManager || stateUserInfo.isPilot) && <div className="BottomMargin">
              <div className="fw-700 sub-title">Teams</div>
              <div className="area"><TeamSelect
                userTeams={stateUserTeams}
                userInfo={stateUserInfo}
                onUserFormChange={onUserFormChange}
              /></div>
            </div> }
            { stateUserInfo.isPilot && (<div><div className="BottomMargin">
              <FormInput
                name={'license'}
                holder={'Enter License Number'}
                type={'text'}
                title={'License'}
                change={this.onChange}
                value={stateUserInfo.license}
              />
            </div>
            <div className="BottomMargin">
              <FormInput
                name={'transportType'}
                holder={'Enter Transport Type'}
                type={'text'}
                title={'Transport Type'}
                change={this.onChange}
                value={stateUserInfo.transportType}
              />
            </div></div>)}
            {/*{ stateReqGeoFence &&*/}
                {/*<div className="BottomMargin">*/}
                {/*<div className="fw-700">Location</div>*/}
                {/*<div className="area">{stateFranchiseGeoFence.map((fence) => {*/}
                        {/*return (*/}
                          {/*<span>{fence}</span>*/}
                        {/*)*/}
                {/*})*/}
                {/*}*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*}*/}
            { (stateUserInfo.isPilot || stateUserInfo.isMerchant || stateUserInfo.selectAdmin || (!stateUserInfo.selectAdmin && !stateUserInfo.isFranchiseAdmin)) && <div className="ink-flex push-right push-bottom"><button type="submit">Submit</button></div> }
          </div>
        </form>) : (<LoadingSpinner className="ink-flex push-center cs-loader" color={stateUserStatus.statusColor}>
              <div className="cs-loader-inner">
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <div className="cs-note">
                  <span>{stateUserStatus.statusText}</span></div>
              </div>
              </LoadingSpinner>)}
    </CreateUserStyle>
    );
  }
}
