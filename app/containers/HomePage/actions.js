export function onSearch(search) {
  return {
    type: 'ON_SEARCH',
    payload: search,
  };
}

export function pickupCord(value) {
    return {
        type: 'PICKUP_CORD',
        value,
    };
}

export function deliveryCord(value) {
    return {
        type: 'DELIVERY_CORD',
        value,
    };
}

export function pickupChange(data) {
  return {
    type: 'PICKUP_CHANGE',
    payload: data,
  };
}
export function deliveryChange(data) {
  return {
    type: 'DELIVERY_CHANGE',
    payload: data,
  };
}

export function addTaskInfo(data) {
  return {
    type: 'ADD_TASK_INFO',
    payload: data,
  };
}

export function addingTask(data) {
  return {
    type: 'ADDING_TASK',
    payload: data,
  };
}
export function postAddTask(data) {
  return {
    type: 'POST_ADD_TASK',
      payload: data,
  };
}

export function postAddTaskSuccess(data) {
  return {
    type: 'POST_ADD_TASK_SUCCESS',
    payload: data,
  };
}

export function postAddTaskFailure(data) {
  return {
    type: 'POST_ADD_TASK_FAILURE',
    payload: data,
  };
}

export function clearForm() {
  return {
    type: 'CLEAR_FORM',
  };
}

export function setSelection(data) {
  return {
    type: 'SET_SELECTION',
    payload: data,
  };
}

export function setDeliveryTime(data) {
    return {
        type: 'SET_DELIVERY_TIME',
        payload: data,
    };
}
export function openAccordion(data) {
  return {
    type: 'ACCORDION_OPEN',
    payload: data,
  };
}

export function addTaskStatus(data) {
  return {
    type: 'ADD_TASK_STATUS',
    payload: data,
  };
}

// GET PILOTS

export function getPilot(data) {
  return {
    type: 'GET_PILOT',
    payload: data,
  };
}

export function getPilotSuccess(data) {
  return {
    type: 'GET_PILOT_SUCCESS',
    payload: data,
  };
}

export function getPilotFailure(data) {
  return {
    type: 'GET_PILOT_FAILURE',
    payload: data,
  };
}

// GET ORDERS

export function getOrder(data) {
  return {
    type: 'GET_ORDER',
    payload: data,
  }
}

export function getOrderSuccess(data) {
  return {
    type: 'GET_ORDER_SUCCESS',
    payload: data,
  };
}

export function getOrderFailure(data) {
  return {
    type: 'GET_ORDER_FAILURE',
    payload: data,
  };
}// GET ORDER DETAILS
export function requestOrderDetail(data) {
  return {
    type: 'REQUEST_ORDER_DETAILS',
    payload: data,
  };
}

export function getOrderDetail(data) {
  return {
    type: 'GET_ORDER_DETAILS',
    payload: data,
  };
}

export function getOrderDetailSuccess(data) {
  return {
    type: 'GET_ORDER_DETAILS_SUCCESS',
    payload: data,
  };
}

export function getOrderDetailFailure(data) {
  return {
    type: 'GET_ORDER_DETAILS_FAILURE',
    payload: data,
  };
}

// GET PILOT DETAILS
export function requestPilotDetail(data) {
  return {
    type: 'REQUEST_PILOT_DETAILS',
    payload: data,
  };
}

export function getPilotDetail(data) {
  return {
    type: 'GET_PILOT_DETAILS',
    payload: data,
  };
}

export function getPilotDetailSuccess(data) {
  return {
    type: 'GET_PILOT_DETAILS_SUCCESS',
    payload: data,
  };
}

export function getPilotDetailFailure(data) {
  return {
    type: 'GET_PILOT_DETAILS_FAILURE',
    payload: data,
  };
}

// ADD TASK TEAM SELECTION
export function teamSelect(id) {
  return {
    type: 'TEAM_SELECT',
    payload: id,
  };
}
export function pilotSelect(data) {
  return {
    type: 'PILOT_SELECT',
    payload: data,
  };
}

// TRIGGER ADD_ORDER_COMPONENT

export function triggerAddOrderComponent() {
    return {
      type: 'TRIGGER_ADD_ORDER_COMPONENT',
    };
}

// tab selection
export function tabSelection(data) {
    return {
      type: 'TAB_SELECTION',
      payload: data,
    }
}