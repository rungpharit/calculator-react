function del(num){
  let numArr = []
  for(let i=0 ; i < num.length ; i++){
    numArr.push(num[i])
  }
  numArr.pop()
  let numStr = numArr.join("")
  return numStr
}

export default del;