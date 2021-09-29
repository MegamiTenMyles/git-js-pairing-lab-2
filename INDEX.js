//1 

function OneHundredtoFive(){
  for(let i = 100; i >= 5; i--){
      console.log(i)
  }
}
// HundredtoFive()

//2

function absoluteValue(number){
  let answer = Math.abs(number)
  if (answer === 0){
    return null
} else {
  return answer
}
}
// console.log(absoluteValue(-20))

//3

function multiplesOfFourOrSeven(){
  for (let i = 0; i <= 100; i++){
    if(i % 4 === 0 || i % 7 === 0){
      console.log(i)
    }
  }
}
// multiplesOfFourOrSeven()