// task 1
const isEven = (number) => number % 2 === 0;

const getResult = (numbers) => {
  return numbers.map((number) => (isEven(number) ? number + 1 : number - 1));
};

console.log(getNumber(numbers));

// task 2
const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const capitalizeWords = (words) => words.map((word) => capitalize(word));

console.log(capitalizeWords(words));

// task 3
const removeByIds = (users, blackListIds) => {
  return users.filter((user) => !blackListIds.includes(user.id));
};

console.log(removeByIds(users, [2]));

// task 4
const isPalindrome = (word) =>
  word.toLowerCase().split("").reverse().join("") === word.toLowerCase();

console.log(isPalindrome("шалаш"));
console.log(isPalindrome("Привет"));

// task 5
const divideByGeender = (users) => {
  return users.reduce(
    (accumulator, { first_name, last_name, ...otherFields }) => {
      const userToPush = {
        ...otherFields,
        fullName: `${first_name} ${last_name}`,
      };

      if (userToPush.gender === "Male") {
        accumulator.men.push(userToPush);
      } else {
        accumulator.women.push(userToPush);
      }
      return accumulator;
    },
    { men: [], women: [] }
  );
};
console.log(divideByGeender(customers));

// task 6
const mapReleases = (releases) => {
  return releases.map(({ id, title }) => ({ id, title }));
};
console.log(mapReleases(releases));

//task 7
const getToprateReleasesIds = (releases) => {
  const result = [];

  releases.forEach(({ id, rating }) => {
    if (rating[0] === 5) {
      result.push(id);
    }
  });
  return result;
};
console.log(getToprateReleasesIds(newReleases));
