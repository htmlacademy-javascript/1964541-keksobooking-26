function getRandomInt(firstNum, secondNum) {
  if (firstNum < secondNum) {
    return Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;
  }
  return Math.floor(Math.random() * (firstNum - secondNum + 1)) + secondNum;
}

function getRandomFloat(firstNum, secondNum, afterCommaNum) {
  if (firstNum < secondNum) {
    return (Math.random() * (secondNum - firstNum + 1) + firstNum).toFixed(afterCommaNum);
  }
  return (Math.random() * (firstNum - secondNum + 1) + secondNum).toFixed(afterCommaNum);
}

console.log(getRandomInt(0,5));
console.log(getRandomFloat(3, 8.5, 3));
