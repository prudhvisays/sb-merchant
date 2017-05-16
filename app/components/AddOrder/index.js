/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createStructuredSelector } from 'reselect';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import OrderDetails from './OrderDetails';
import LocationAddress from './LocationAddress';
import DeliveryTime from './DeliveryTime';
import PaymentType from './PaymentType';
import LoadingSpinner from '../LoadingSpinner';
import AddOrderStyle from './AddOrderStyle';
import './OrderDetails.css';

class AddOrder extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.calendarChange = this.calendarChange.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
    this.closeComponent = this.closeComponent.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.onValuePress = this.onValuePress.bind(this);
  }

  componentDidMount() {
    const elem1 = this.addOrderDom1;
    const elem2 = this.addOrderDom2;
    elem1.style.opacity = 0.01;
    elem1.style.transform = 'translateY(16px)';
    elem2.style.opacity = 0.01;
    elem2.style.transform = 'translateY(16px)';
    window.requestAnimationFrame(function() {
      elem1.style.transform = 'translateY(0)';
      elem1.style.transition = "all 550ms cubic-bezier(0.080, 1.090, 0.320, 1.275)";
      elem1.style.opacity = 1;
      elem2.style.transform = 'translateY(0)';
      elem2.style.transition = "all 550ms cubic-bezier(0.080, 1.090, 0.320, 1.275)";
      elem2.style.opacity = 1;
    });
  }

  calendarChange(date) {
    const { pickup } = this.props.stateAddTask;
    const Date = moment(date[0]).utc().format();
    this.emitChanges({ ...pickup, from_date: Date });
  }
  valueChange(e) {
    const { taskInfo } = this.props.stateAddTask;
    this.props.addTaskInfo({...taskInfo, [e.target.name]: e.target.value});
  }
  emitChanges(newFormState) {
    this.props.pickupChange(newFormState);
  }

  closeComponent() {
      this.props.triggerComponent();
      this.props.clearForm();
      this.props.deliveryCord({dLat: '', dLng: ''});
  }
  onValuePress(e) {
    const re = /[^0-9.]+/g;
    if (re.test(e.key)) {
      e.preventDefault();
    }
  }
  render() {
        const {
            addTaskInfo,
            deliveryChange,
            stateAddTask,
            deliveryCord,
            setDeliveryTime,
            postAddTask,
            triggerComponent,
            clearForm,
            pickupChange
        } = this.props

        let child;
        if(!stateAddTask.request) {
          child = <form onSubmit={() => {postAddTask(stateAddTask)}}><div className="form">
            <div className="row">
              <div className="col-md-6" style={{ padding: '0 1em 0 0' }} ref={(comp) => { this.addOrderDom1 = comp; }}>
                <OrderDetails
                  addTaskInfo={addTaskInfo}
                  deliveryChange={deliveryChange}
                  stateAddTask={stateAddTask}
                  deliveryCord={deliveryCord}
                />
              </div>
              <div className="col-md-6" style={{ padding: 0 }} ref={(comp) => { this.addOrderDom2 = comp; }}>
                <div className="p-3" style={{ height: '100%' }}>
                  <div className="form-group mt-1"><label>Delivery Time</label>
                    <DeliveryTime
                      setDeliveryTime={setDeliveryTime}
                      stateAddTask={stateAddTask}
                      pickupChange={pickupChange}
                    /> </div>

                  {/*{ (stateAddTask.deliveryTime === 'schedule') &&  <div className="form-group">*/}
                  {/*<label htmlFor="date-input" className="col-form-label">Pickup Before</label>*/}
                  {/*<Flatpickr*/}
                  {/*className="form-control" id="date-input"*/}
                  {/*placeholder={'Pickup Before'}*/}
                  {/*onChange={this.calendarChange}*/}
                  {/*options={{enableTime: true, minDate: 'today', maxDate: new Date().fp_incr(1)}}*/}
                  {/*style={{ background: '#fff' }}*/}
                  {/*/>*/}
                  {/*</div>}*/}
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="orderValue">Order Value<span className="text-danger lead">*</span></label>
                      <input
                        type="number"
                        className="form-control"
                        id="orderValue"
                        placeholder="Invoice Amount"
                        name="value"
                        min="0"
                        required="required"
                        onChange={this.valueChange}
                        onKeyPress={this.onValuePress}
                        value={stateAddTask.taskInfo.value}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Payment Type</label>
                    </div>
                  </div>
                  <div className="row">
                    <PaymentType
                      addTaskInfo={addTaskInfo}
                      stateAddTask={stateAddTask}
                    />
                  </div>
                </div>
              </div>
              <div className="actionButton">
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-danger" onClick={() => {this.closeComponent()}}>Close</button>
                  <button type="button" className="btn btn-warning" style={{ marginLeft: '1em' }} onClick={clearForm}>Clear</button>
                  <button type="submit" className="btn btn-primary" style={{ marginLeft: '1em' }} >Create Order</button>
                </div>
              </div>
            </div>
          </div></form>
        } else {
          child = <LoadingSpinner
            className="ink-flex push-center cs-loader"
            color={stateAddTask.addTaskStatus.statusColor}
            style={{ padding: '6.5em'}}
          >
            <div className="cs-loader-inner">
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <div className="cs-note">
                <span>{stateAddTask.addTaskStatus.statusText}</span></div>
            </div>
          </LoadingSpinner>
        }
        return (
            <AddOrderStyle className="container" style={{ padding: '1em 3em'}}>
              {child}
            </AddOrderStyle>
        );
    }
}

export default AddOrder;
