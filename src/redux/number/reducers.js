import actionTypes from './types';

const initialState = {
  previousValue : 0,
  currentValue :0
}
  
function numberReducer(state = initialState,action){
  switch(action.type){
    
    case actionTypes.ZERO :
      return ; //maybe not in here

    case actionTypes.ONE :
      console.log("payload: ",action.payload)
      return {
        ...state,
        users : [
          ...state.users,
          {
            ...action.payload
          }
        ]
      };

    case actionTypes.TWO :
      return ;

    case actionTypes.PLUS :
      return {
        ...state,
        disabled : !state.disabled
      };

    case actionTypes.THREE :
      state.users.splice(action.payload,1)
      return {
        ...state,
        users :[
          ...state.users
        ]
      };
    case actionTypes.FOUR :
      state.users.splice(action.payload,1)
      return {
        ...state,
        users :[
          ...state.users
        ]
      };

    case actionTypes.FIVE :
      state.users.splice(action.payload,1)
      return {
        ...state,
        users :[
          ...state.users
        ]
      };
    case actionTypes.SIX :
    return {
      ...state,
      disabled : !state.disabled
    };
    case actionTypes.SEVEN :
      return {
        ...state,
        disabled : !state.disabled
      };
    case actionTypes.EIGHT :
      return {
        ...state,
        disabled : !state.disabled
      };
    case actionTypes.NINE :
      return {
        ...state,
        disabled : !state.disabled
      };
    default:
      return state;
  }
}

export default numberReducer;