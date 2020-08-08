import actionTypes from './types';

const initialState = {
  operator : ""
}
  
function operatorReducer(state = initialState,action){
  switch(action.type){
    
    case actionTypes.CLEAR_OPERATOR :
      return {
        operator : ""
      };

    case actionTypes.PLUS :
      return {
        operator : '+'
      };

    case actionTypes.SUBTRACT :
      return {
        operator : '-'
      };

    case actionTypes.MULTIPLY :
      return {
        operator : '*'
      };

    case actionTypes.DIVIDE :
      return {
        operator : '/'
      };

    case actionTypes.MODULUS :
    return{
      operator : '%'
    };

    default:
      return state;
  }
}

export default operatorReducer;