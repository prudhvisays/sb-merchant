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


class AddOrder extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.calendarChange = this.calendarChange.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
    this.closeComponent = this.closeComponent.bind(this);
  }

  calendarChange(date) {
    const { pickup } = this.props.stateAddTask;
    const Date = moment(date[0]).utc().format();
    this.emitChanges({ ...pickup, to_date: Date });
  }
  emitChanges(newFormState) {
    this.props.deliveryChange(newFormState);
  }

  closeComponent() {
      this.props.triggerComponent();
      this.props.clearForm();
      this.props.deliveryCord({dLat: '', dLng: ''});
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
            clearForm
        } = this.props
        return (
            <section className="container" style={{ padding: '1em 3em'}}>
              { !stateAddTask.request ? (<div className="form">
                    <div className="row">
                        <div className="col-6" style={{ padding: '0 1em 0 0' }}>
                            <OrderDetails
                                addTaskInfo={addTaskInfo}
                                deliveryChange={deliveryChange}
                                stateAddTask={stateAddTask}
                            />
                        </div>
                        <div className="col-6" style={{ padding: 0 }}>
                            <div className="card p-2" style={{ height: '100%' }}>
                                <LocationAddress
                                    addTaskInfo={addTaskInfo}
                                    deliveryChange={deliveryChange}
                                    stateAddTask={stateAddTask}
                                    deliveryCord={deliveryCord}
                                    />

                                <label>Delivery Time</label>
                                <DeliveryTime
                                setDeliveryTime={setDeliveryTime}
                                stateAddTask={stateAddTask}
                                />

                                { stateAddTask.deliveryTime === 'schedule' &&  <div className="form-group">
                                    <label htmlFor="date-input" className="col-form-label">Date</label>
                                  {/*<Flatpickr*/}
                                    {/*className="form-control" id="date-input"*/}
                                    {/*data-enable-time*/}
                                    {/*placeholder={'Pickup  Before'}*/}
                                    {/*onChange={this.calendarChange}*/}
                                    {/*value={ stateAddTask.pickup.to_date ? moment(stateAddTask.pickup.to_date).format() : ''}*/}
                                    {/*options={{enableTime: true}}*/}
                                  {/*/>*/}
                                </div>}
                                <div className="row">
                                    <div className="col-6">
                                        <label>Payment Type</label>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="orderValue">Order Value</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <PaymentType
                                        addTaskInfo={addTaskInfo}
                                        stateAddTask={stateAddTask}
                                    />
                                    <div className="col-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="orderValue"
                                            placeholder="Enter Value"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%', marginTop: '1em' }}>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-danger" style={{ marginLeft: '1em' }} onClick={() => {this.closeComponent()}}>Close</button>
                                <button type="button" className="btn btn-warning" style={{ marginLeft: '1em' }} onClick={clearForm}>Clear</button>
                                <button type="button" className="btn btn-primary" style={{ marginLeft: '1em' }}onClick={() => { postAddTask(stateAddTask)}}>Add Order</button>
                            </div>
                        </div>
                    </div>
                </div>) : (<LoadingSpinner
                  className="ink-flex push-center cs-loader"
                  color={stateAddTask.addTaskStatus.statusColor}
                  style={{ margin: '3em 8em'}}
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
                </LoadingSpinner>)}
            </section>
        );
    }
}

export default AddOrder;
