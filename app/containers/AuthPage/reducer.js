import auth from '../../Api/Auth';

let initialState = {
  formState: {
    username: '',
    password: '',
    userRole: '',
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn,
  userType: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FORM':
      return {
        ...state,
        formState: action.newFormState,
      };
    case 'SET_AUTH':
      return {
        ...state,
        loggedIn: action.newAuthState,
      };
    case 'SENDING_REQUEST':
      return {
        ...state,
        currentlySending: action.sending,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'USER_TYPE':
      return {
        ...state,
        userType: action.userType,
      };
    default:
      return state;
  }
}

export default authReducer;
