function numberOfPairs(gloves) {
  const sumGloves = gloves.reduce((acc, glove) => {
    acc[glove] = (acc[glove] || 0) + 1;
    return acc;
  }, {});

  let result = 0;
  Object.keys(sumGloves).forEach(
    (element) => (result += Math.floor(sumGloves[element] / 2))
  );
  return result;
}

console.log(numberOfPairs(["red", "green", "blue", "red", "blue"]));
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
