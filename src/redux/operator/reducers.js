import actionTypes from './types';

const initialState = {
  operator : "",
  actionType : ""
}
  
function operatorReducer(state = initialState,action){
  switch(action.type){
   
    case actionTypes.CLEAR_OPERATOR :
      return {
        ...state,
        operator : ""
      };

    case actionTypes.ADD_OPERATOR :
      return {
        ...state,
        operator : action.payload
      };  

    case actionTypes.PLUS :
      return {
        ...state,
        operator : '+',
        actionType : action.type
      };

    case actionTypes.SUBTRACT :
      return {
        ...state,
        operator : '-',
        actionType : action.type
      };

    case actionTypes.MULTIPLY :
      return {
        ...state,
        operator : 'x',
        actionType : action.type
      };

    case actionTypes.DIVIDE :
      return {
        ...state,
        operator : '/',
        actionType : action.type
      };

    case actionTypes.MODULUS :
    return{
      ...state,
      operator : '%',
      actionType : action.type
    };

    default:
      return state;
  }
}

export default operatorReducer;