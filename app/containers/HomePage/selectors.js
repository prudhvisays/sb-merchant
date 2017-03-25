import { createSelector } from 'reselect';
import _ from 'lodash';

const homeData = () => (state) => state.get('home');

const deliveryCordState = () => createSelector(
    homeData(),
    (homeState) => homeState.deliverycord,
);
const pickupCordState = () => createSelector(
  homeData(),
  (homeState) => homeState.pickupcord,
);
const searchText = () => createSelector(
  homeData(),
    (homeState) => homeState.searchText,
);
const addTask = () => createSelector(
  homeData(),
    (homeState) => homeState.addTask,
);
const selectedTab = () => createSelector(
    homeData(),
    (state) => state.selectedTab,
)

const auto = () => createSelector(
  homeData(),
  (homeState) => homeState.auto,
);

const filterOrders = (tab, lists) => {
    if(lists.length > 0) {
        if(tab === 'Orders') {
            return lists
        } else if(tab === 'InProgress') {
            return lists.filter((list) => list.status === 'ASSIGNED')
        } else if(tab === 'Completed') {
            return lists.filter((list) => list.status === 'COMPLETED')
        } else if(tab === 'UNASSIGNED' || tab === 'FAILED') {
            return lists.filter((list) => list.status === ('UNASSIGNED' || 'FAILED'))
        } else {
            return [];
        }
    } else {
        return [];
    }
}
const orderList = () => createSelector(
  selectedTab(),
  homeData(),
  (tab,state) => filterOrders(tab,state.orderList.orders),
);
const statsLength = (lists, value) => {
  if(lists.length > 0) {
    return lists.filter((list) => {
      return list.status === value
    }).length
  }
  return true
}
const orderStats = () => createSelector(
  orderList(),
  (oList) => {
    return {
     assigned: statsLength(oList, 'ASSIGNED'),
     unassigned: statsLength(oList, ('UNASSIGNED' || 'FAILED')),
     completed: statsLength(oList, 'COMPLETED'),
    }
  }
);

const orderId = () => createSelector(
  homeData(),
  (state) => state.orderDetails.orderId,
);

const addOrderComponent = () => createSelector(
    homeData(),
    (state) => state.addOrderComponent,
);
export {
  homeData,
  deliveryCordState,
  pickupCordState,
  searchText,
  addTask,
  auto,
  orderList,
  orderId,
  orderStats,
  addOrderComponent,
  selectedTab,
};
