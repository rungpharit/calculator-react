import actionTypes from './types';

const initialState = {
  previousValue : 0,
  currentValue :0
}
  
function operatorReducer(state = initialState,action){
  switch(action.type){
    case actionTypes.EQUAL :
      return ; //maybe not in here

    case actionTypes.CLEAN :
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

    case actionTypes.DELETE :
      return ;

    case actionTypes.PLUS :
      return {
        ...state,
        disabled : !state.disabled
      };

    case actionTypes.SUBTRACT :
      state.users.splice(action.payload,1)
      return {
        ...state,
        users :[
          ...state.users
        ]
      };
    case actionTypes.MULTIPLY :
      state.users.splice(action.payload,1)
      return {
        ...state,
        users :[
          ...state.users
        ]
      };

    case actionTypes.DIVIDE :
      state.users.splice(action.payload,1)
      return {
        ...state,
        users :[
          ...state.users
        ]
      };
    case actionTypes.MODULUS :
    return {
      ...state,
      disabled : !state.disabled
    };

    default:
      return state;
  }
}

export default operatorReducer;