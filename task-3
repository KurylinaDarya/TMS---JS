// task 1
const newRealases = Object.assign(
  {},
  ...videos.map((video) => ({ [video.id]: video.title }))
);
console.log(newRealases);

// task 3
function someFn(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}
console.log(someFn([1, 1, 2, 3]));
console.log(someFn([1, 2, 3, 4, 2]));

// task 4
// const data = { a: 1, b: "Hello", c: null, z: undefined };
const data = { name: "alex", age: 10, friends: [], adress: null };

Object.keys(data).forEach((key) => {
  if (data[key] === null || data[key] === undefined) {
    delete data[key];
  }
});
console.log(data);

//task 5
const input = [1, 2, 2, 3, 4, 3, 4];

const singleNumber = function (nums) {
  let uniq = Array.from(new Set(nums));

  let reduceSum = (s, i) => s + i;
  let uniqSum = uniq.reduce(reduceSum);
  let numSum = nums.reduce(reduceSum);

  return uniqSum * 2 - numSum;
};
console.log(singleNumber(input));

//task 6
function clampString(string) {
  if (string.length <= 3) {
    return string;
  }
  string = string.slice(0, 3) + "...";
  return string;
}
console.log(clampString("Hello", 3));

//task 7
const someFunction = async (number) => {
  return new Promise((resolve) => setTimeout(resolve, number));
};
someFunction(1000).then(() => console.log(1));
someFunction(5000).then(() => console.log(2));
