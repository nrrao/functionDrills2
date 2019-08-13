/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
function jediName(firstname,lastName){
  let result =lastName.substring(0,3)+firstname.substring(0,2) ;
  return result;

    
}

console.log(jediName ('Beyonce','Knowels'));

function beyond(num){
  if (isFinite(num) === false){
    console.log('And Beyond');
  }
  else {
    if(Math.sign(num)===1){
      console.log('To Infinity');
    }
    if(Math.sign(num)===-1){
      console.log('To negative infinity');
            
    }
  }
  if(num===0){
    console.log('staying home');
  }
    
}

beyond(1000.0/0.0);

function decode(string){
  if (string.charAt(0) === 'a'){
    return string.charAt(1);
  }
  if (string.charAt(0) === 'b'){
    return string.charAt(2);
  }
  if (string.charAt(0) === 'c'){
    return string.charAt(3);
  }
  if (string.charAt(0) === 'd'){
    return string.charAt(4);
  }
  return ' ';
}
//console.log(decode('cycle'));
function decodeString(){
  let sentence = 'craft block argon meter bells brown croon droop'.split(' ');
  let decodeStr='';
  for(let i=0;i<sentence.length;i++){
    decodeStr += decode(sentence[i]);
  }
  return decodeStr;
}
console.log(decodeString());

function daysInMonth(month,leapYear=false){
  let result = '';
  switch(month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December' :
    result  = `${month} has 31 days`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result  = `${month} has 30 days`;
    break;
  case 'February':
    if(leapYear) {
      result = `${month} has 29 days`;
    }
    else {
      result = `${month} has 28 days`;
    }
    break;
  default:
    result = 'Must provide a valid month.';
  }
  return result;
}

console.log(daysInMonth('March'));
console.log(daysInMonth('February', false));
console.log(daysInMonth('February', true));
console.log(daysInMonth('askdjhaskdj'));

function rockPaperScissors(num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  const rock = 1;
  const paper = 2;
  const scissor = 3;

  if(num in [rock,paper,scissor]) {
    if (num === randomNo) {
      return 'Tie';
    }
    //rock>scissor
    //scissor>paper
    //paper>rock
    if (num === rock) {
      if (randomNo === scissor) {
        return 'You Win!';
      }
      return 'You Lose!';
    }
    if (num === paper) {
      if (randomNo === rock) {
        return 'You Win!';
      }
      return 'You Lose';
    }
    if (num === scissor) {
      if (randomNo === paper) {
        return 'You Win!';
      }
      return 'You Lose';
    }
  }
  else {
    throw 'Invalid input';
  }
}

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(3));
try {
  rockPaperScissors(5);
}
catch (e) {
  console.log(e);
}
