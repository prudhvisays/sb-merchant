import _ from 'lodash';
import moment from 'moment';

const initialState = {
  searchText: '',
  addOrderComponent: false,
  selectedTab: 'Orders',
  pickupcord: {
    pLat: '',
    pLng: '',
  },
  deliverycord: {
    dLat: '',
    dLng: '',
  },
  addTask: {
    pickup: {
      from_name: '',
      from_phone: '',
      from_email: '',
      from_address: '',
      from_date: '',
    },
    delivery: {
      to_name: '',
      to_phone: '',
      to_email: '',
      to_address: '',
      to_date: '',
    },
    taskInfo:{
    title: '',
    description: '',
    team: '',
    pilots: [],
    paymentType: 'PREPAID',
    value: '',
  },
  request: false,
  deliveryTime: 'deliverNow',
  addTaskStatus: {
    statusText: 'Sending',
    statusColor: '#6bc9c5',
  },
   selection: {
     teamSelect: '',
     pilots: '',
   },
  },
  auto: 'auto',
  orderList: {
    orders: [],
    date: '',
    error:'',
  },
  orderDetails: {
    orderId: '',
    orderInfo: {},
    error: '',
    request: false,
  },
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
      case 'PICKUP_CORD':
          return { ...state,
              pickupcord: action.value };
      case 'DELIVERY_CORD':
          return { ...state,
              deliverycord: action.value };
      case 'ON_SEARCH':
      return { ...state,
        searchText: action.payload,
      };
      case 'TAB_SELECTION':
        return {
            ...state,
            selectedTab: action.payload,
        }
    case 'PICKUP_CHANGE':
      return { ...state,
        addTask: {
          ...state.addTask,
          pickup: action.payload,
        },
      };
    case 'DELIVERY_CHANGE':
      return { ...state,
      addTask: {
        ...state.addTask,
        delivery: action.payload,
      },
    };
    case 'ADD_TASK_INFO':
    return { ...state,
      addTask: {
        ...state.addTask,
        taskInfo: action.payload,
      },
    };
    case 'ADDING_TASK':
    return { ...state,
      addTask: {
        ...state.addTask,
        request: action.payload,
      },
    };
    case 'CLEAR_FORM':
    return { ...state,
      addTask: initialState.addTask,
    };
    case 'SET_SELECTION':
    return { ...state,
      auto: action.payload,
      addTask: {
        ...state.addTask,
        selection: {
          ...state.addTask.selection,
          pilots: '',
        },
      },
    };
      case 'SET_DELIVERY_TIME':
          return {
              ...state,
              addTask: {
                  ...state.addTask,
                  deliveryTime: action.payload,
              }
          };
    case 'ACCORDION_OPEN':
    return accordionOpen(state, action);
    case 'ADD_TASK_STATUS':
    return {
      ...state,
      addTask: {
        ...state.addTask,
        addTaskStatus: action.payload,
      },
    };
    case 'GET_PILOT_SUCCESS':
      return {
        ...state,
        pilotList: {
          ...state.pilotList,
          pilots: action.payload,
        },
      };
    case 'GET_PILOT_FAILURE':
      return {
        ...state,
        pilotList: {
          ...state.pilotList,
          error: action.payload,
        },
      };
    case 'GET_ORDER_SUCCESS':
      return {
        ...state,
        orderList: {
          ...state.orderList,
          orders: action.payload.response,
          date: action.payload.date,
        },
      };
    case 'GET_ORDER_FAILURE':
      return {
        ...state,
        orderList: {
          ...state.orderList,
          error: action.payload.error,
          date: action.payload.date,
        },
      };
    case 'GET_ORDER_DETAILS':
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          orderId: action.payload,
          },
      };
    case 'GET_ORDER_DETAILS_SUCCESS':
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          orderInfo: action.payload,
        },
      };
    case 'REQUEST_ORDER_DETAILS':
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          request: action.payload,
        },
      };
      case 'GET_PILOT_DETAILS':
      return {
        ...state,
        pilotDetails: {
          ...state.pilotDetails,
          pilotId: action.payload,
          },
      };
    case 'GET_PILOT_DETAILS_SUCCESS':
      return {
        ...state,
        pilotDetails: {
          ...state.pilotDetails,
          pilotInfo: action.payload,
        },
      };
    case 'REQUEST_PILOT_DETAILS':
      return {
        ...state,
        pilotDetails: {
          ...state.pilotDetails,
          request: action.payload,
        },
      };
    case 'TEAM_SELECT':
      return {
        ...state,
        addTask: {
          ...state.addTask,
          selection: {
            ...state.addTask.selection,
            teamSelect: action.payload,
          },
        },
      };
    case 'PILOT_SELECT':
      return {
        ...state,
        addTask: {
          ...state.addTask,
          selection: {
            ...state.addTask.selection,
            pilots: action.payload,
          },
        },
      }
      case 'TRIGGER_ADD_ORDER_COMPONENT':
          return {
              ...state,
              addOrderComponent: !state.addOrderComponent,
          }
    default:
      return state;
  }
}

function accordionOpen(state, action) {
  const index = _.findIndex(state.orderList.orders, {
    _id: action.payload
  });
  const newState = state.orderList.orders.slice();
  if (state.orderList.orders[index]['open']) {
    newState[index]['open'] = !state.orderList.orders[index]['open'];
  } else {
    newState.forEach((order) => order.open = false);
    newState[index]['open'] = true;
  }
  return {
    ...state,
    orderList: {
      ...state.orderList,
      orders: newState,
    },
  };
}
export default homeReducer;
