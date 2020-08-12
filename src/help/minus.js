function minus(number){
  if(parseFloat(number) > 0){
    return -Math.abs(number).toString()
  }
  else{
    return Math.abs(number).toString()
  }
}

export default minus;