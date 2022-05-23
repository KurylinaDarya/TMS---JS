/ task 1
const getNumber = (numbers) => {
  return numbers.map((item) => {
    return item % 2 == 0 ? item + 1 : item - 1;
  });
};
console.log(getNumber(numbers));

// task 2
const helloWorld = (wordsList) => {
  return wordsList.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};
console.log(helloWorld(wordsList));

// task 3

// task 4
const isPalindrome = (word) =>
  word.toLowerCase().split("").reverse().join("") === word.toLowerCase();

console.log(isPalindrome("шалаш"));
console.log(isPalindrome("Привет"));

// task 5
const getFullName = (users) => {
  return users.map((item) => {
    return {
      id: item.id,
      fullName: item.first_name + " " + item.last_name,
      email: item.email,
      gender: item.gender,
      ip_address: item.ip_address,
    };
  });
};
console.log(getFullName(users));

// task 6
const withoutSomeItem = (newReleases) => {
  return newReleases.map((item) => {
    return {
      id: item.id,
      title: item.title,
    };
  });
};
console.log(withoutSomeItem(newReleases));

//task 7
const getVideoRating = (videoList) => {
  const maxRating = 5.0;
  return videoList.filter((item) => {
    return item.rating === maxRating;
  });
};
console.log(getVideoRating(videoList));
