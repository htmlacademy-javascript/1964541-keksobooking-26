function getRandomInt(firstNum, secondNum) {
  return Math.abs(Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum);
}

function getRandomFloat(firstNum, secondNum, afterCommaNum) {
  if (firstNum === secondNum) {
    return firstNum;
  }
  return Math.abs(((Math.random() * (firstNum - secondNum + 1) + secondNum).toFixed(afterCommaNum)));
}

console.log(getRandomInt(2,3));
console.log(getRandomFloat(0.5, 4.3, 2));
