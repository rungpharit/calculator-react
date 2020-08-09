import actionTypes from '../redux/operator/types'

function calculate(data){
  switch(data.operator){
    case actionTypes.PLUS:
      return data.previousValue + data.currentValue 
    case actionTypes.SUBTRACT :
      return data.previousValue - data.currentValue 
    case actionTypes.MULTIPLY :
      return data.previousValue * data.currentValue 
    case actionTypes.DIVIDE :
      return data.previousValue / data.currentValue 
    case actionTypes.MODULUS :
      return data.previousValue % data.currentValue 
  }

}

export default calculate;