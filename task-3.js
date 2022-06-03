// task 1
const createIdTitleMap = (videos) => {
  return videos.reduce((result, { id, title }) => {
    result[id] = title;
    return result;
  }, {});
};

console.log(createIdTitleMap(videos));

const newRealases = Object.assign(
  {},
  ...videos.map((video) => ({ [video.id]: video.title }))
);
console.log(newRealases);

//task 2

const getMaxSquareUrl = (boxarts) => {
  const boxartWithSquare = boxarts.map(({ url, width, hight }) => ({
    url: url,
    square: width * hight,
  }));
  return boxartWithSquare.reduce((result, boxart) =>
    result.square > result.boxart ? result : boxart
  ).url;
};
console.log(getMaxSquareUrl(boxarts));

// task 3
const someFunction = [1, 1, 2, 3];

const findMostFrequenNumber = (numbers) => {
  const meetingCountMap = {};

  numbers.forEach((number) => {
    if (meetingCountMap[number]) {
      meetingCountMap[number] += 1;
    } else {
      meetingCountMap[number] = 1;
    }
  });

  const entries = Object.entries(meetingCountMap);

  const [key] = entries.reduce((result, keyValuePair) => {
    return result[1] > keyValuePair[1] ? result : keyValuePair;
  });
  return key;
};
console.log(findMostFrequenNumber(someFunction));

// task 4
// const data = { a: 1, b: "Hello", c: null, z: undefined };
const data = { name: "alex", age: 10, friends: [], adress: null };

const Nullable = (object) => {
  const entries = Object.entries(object);

  const nullableValue = entries.filter(([, value]) => {
    return value !== "undefined" && value !== null;
  });
  return Object.fromEntries(nullableValue);
};
console.log(Nullable(data));

//task 5
const num = [1, 2, 2, 3, 4, 3, 4];

const findUniqueNumber = (numbers) => {
  const meetingsNumberMap = numbers.reduce((result, number) => {
    if (result[number]) {
      result[number] += 1;
    } else {
      result[number] = 1;
    }
    return result;
  }, {});

  for (const key in meetingsNumberMap) {
    if (meetingsNumberMap[key] === 1) {
      return key;
    }
  }
};

console.log(findUniqueNumber(num));

//task 6
const cutString = (text, maxLinghtText) => {
  if (text <= maxLinghtText) return text;
  return `${text.slice(0, maxLinghtText)}...`;
};
console.log(cutString("Hello", 3));

//task 7
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const asyncFn = async () => {
  await delay(1000);

  console.log(1);

  await delay(5000);

  console.log(2);
};
