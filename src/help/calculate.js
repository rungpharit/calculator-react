
function calculate(data){
  switch(data.operator){
    case '+':
      return data.previousValue + data.currentValue 
    case '-' :
      return data.previousValue - data.currentValue 
    case '*' :
      return data.previousValue * data.currentValue 
    case '/' :
      return data.previousValue / data.currentValue 
    case '%' :
      return data.previousValue % data.currentValue 
  }

}

export default calculate;