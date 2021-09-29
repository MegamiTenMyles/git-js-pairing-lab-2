//1 

function OneHundredtoFive(){
  for(let i = 100; i >= 5; i--){
      console.log(i)
  }
}
// HundredtoFive()

function absoluteValue(number){
  let answer = Math.abs(number)
  if (answer === 0){
    return null
} else {
  return answer
}
}
// console.log(absoluteValue(-20))