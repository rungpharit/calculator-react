import actionTypes from './types';
import del from '../../help/delete';
import minus from '../../help/minus';

const initialState = {
  previousValue : "",
  currentValue : ""
}
  
function numberReducer(state = initialState,action){
  switch(action.type){

    case actionTypes.EQUAL :
      return {
        previousValue : action.payload,
        currentValue : ""
      }; 

    case actionTypes.CLEAR :
      return {
        previousValue : "",
        currentValue : ""
      };

    case actionTypes.DELETE :
      return {
        ...state,
        currentValue : del(state.currentValue)
      }
    
    case actionTypes.ZERO :
      return {
        ...state,
        currentValue : state.currentValue + '0'
      }; 

    case actionTypes.ONE :
      return {
        ...state,
        currentValue : state.currentValue + '1'
      }; 

    case actionTypes.TWO :
      return {
        ...state,
        currentValue : state.currentValue + '2'
      }; ;

    case actionTypes.THREE :
      return {
        ...state,
        currentValue : state.currentValue + '3'
      }; 
      
    case actionTypes.FOUR :
      return {
        ...state,
        currentValue : state.currentValue + '4'
      }; 

    case actionTypes.FIVE :
      return{
        ...state,
        currentValue : state.currentValue + '5'
      }; 

    case actionTypes.SIX :
      return{
        ...state,
        currentValue : state.currentValue + '6'
      }; 

    case actionTypes.SEVEN :
      return {
        ...state,
        currentValue : state.currentValue + '7'
      }; 

    case actionTypes.EIGHT :
      return {
        ...state,
        currentValue : state.currentValue + '8'
      }; 

    case actionTypes.NINE :
      return {
        ...state,
        currentValue : state.currentValue + '9'
      }; 

    case actionTypes.DOT :
      return {
        ...state,
        currentValue : state.currentValue + '.'
      }; 

    case actionTypes.SWITCH_VALUE :
      return {
        previousValue : state.currentValue,
        currentValue : ''
      };

      case actionTypes.MINUS_SIGN :
        return {
        ...state,
        currentValue : minus(state.currentValue)
      }

    default:
      return state;
  }
}

export default numberReducer;