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
import io from 'socket.io-client';
import * as actions from './actions';
import Map from '../../components/Map';
import './HomeStyle.css';
import Tabs from '../../components/Tabs';
import auth from '../../Api/Auth';
import AddOrder from '../../components/AddOrder';

const socket = io('https://season-boy-api.herokuapp.com').connect();
// const userRole = () => {
//   if(localStorage.getItem('sessionData')['manager']) {
//     return {
//
//     }
//   }
// }
const isAdmin = () => {
  if (auth.loggedIn()) {
    const session = JSON.parse(localStorage.getItem('sessionData'));
    if (session.username === 'admin') {
      return true;
    } else if (session.username === 'merchant') {
      return false;
    }
  }
}
import * as selectors from './selectors';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.timerId;
    this.state = {
      compressed: false,
      pilotState: false,
      orderDetails: false,
      groupDisplay: false,
      addTask: false,
    };
  }
  componentDidMount() {
    if(!isAdmin()) {
      this.props.getOrder();
      this.timerId = setInterval(this.props.getOrder, 10000);
    }
    const elem = this.merDom;
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 450ms cubic-bezier(0.6, 0.2, 0.1, 1) 500ms";
      elem.style.opacity = 1;
    });
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { compressed, pilotState, orderDetails, groupDisplay, addTask } = this.state;
    return (
      <section style={{ height: '89vh', overflow: 'hidden' }} ref={(comp) => { this.merDom = comp; }}>
            <div className="row">
                <div className="col-8" style={{ padding: 0}}>
                    { !this.props.addOrderComponent ? <Tabs
                            orderList={this.props.orderList}
                            openAccordion={this.props.openAccordion}
                            tabSelection={this.props.tabSelection}
                        /> : <AddOrder
                            addTaskInfo={this.props.addTaskInfo}
                            deliveryChange={this.props.deliveryChange}
                            pickupChange={this.props.pickupChange}
                            stateAddTask={this.props.addTask}
                            deliveryCordState={this.state.deliveryCordState}
                            deliveryCord={this.props.deliveryCord}
                            setDeliveryTime={this.props.setDeliveryTime}
                            postAddTask={this.props.postAddTask}
                            triggerComponent={this.props.triggerAddOrderComponent}
                            clearForm={this.props.clearForm}
                        />}
                </div>
                <div className="col-4" style={{ padding: '0 1em 0 0'}}>
                    <Map
                        triggerComponent={this.props.triggerAddOrderComponent}
                        addOrderComponent={this.props.addOrderComponent}
                        pickupCordState={this.props.pickupCordState}
                        deliveryCordState={this.props.deliveryCordState}
                        pickupCord={this.props.pickupCord}
                    /></div>
            </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    searchText: selectors.searchText(),
    deliveryCordState: selectors.deliveryCordState(),
    pickupCordState: selectors.pickupCordState(),
    addTask: selectors.addTask(),
    auto: selectors.auto(),
    orderList: selectors.orderList(),
    orderStats: selectors.orderStats(),
    addOrderComponent: selectors.addOrderComponent(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearch: (searchText) => { dispatch(actions.onSearch(searchText)); },
    deliveryCord: (value) => { dispatch(actions.deliveryCord(value)); },
    pickupCord: (value) => { dispatch(actions.pickupCord(value)); },
    pickupChange: (data) => { dispatch(actions.pickupChange(data)); },
    deliveryChange: (data) => { dispatch(actions.deliveryChange(data)); },
    addTaskInfo: (data) => { dispatch(actions.addTaskInfo(data)); },
    postAddTask: (data) => { dispatch(actions.postAddTask(data)); },
    clearForm: () => { dispatch(actions.clearForm()); },
    setSelection: (data) => { dispatch(actions.setSelection(data)); },
    setDeliveryTime: (data) => { dispatch(actions.setDeliveryTime(data)); },
    openAccordion: (data) => { dispatch(actions.openAccordion(data)); },
    getTeamCustomers: (data) => { dispatch(actions.getTeamCustomers(data)); },
    getPilot: (team) => { dispatch(actions.getPilot(team)); },
    getOrder: (data) => { dispatch(actions.getOrder(data)); },
    getOrderDetail: (id) => { dispatch(actions.getOrderDetail(id)); },
    teamSelect: (id) => { dispatch(actions.teamSelect(id)); },
    pilotSelect: (data) => { dispatch(actions.pilotSelect(data)); },
    getPilotDetail: (id) => { dispatch(actions.getPilotDetail(id)); },
    triggerAddOrderComponent: () => { dispatch(actions.triggerAddOrderComponent()); },
    tabSelection: (data) => { dispatch(actions.tabSelection(data)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
