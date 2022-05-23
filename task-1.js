// task 1
const sayHallo = function (userName) {
  if (typeof userName !== "string") {
    return "error";
  }

  const specialName = "mark";

  if (userName.toLowerCase() === specialName) {
    return "Hi, Mark";
  }

  return "Hello, " + userName;
};
console.log(sayHallo("mark"));

// task 2
const pythagorean = function (n, m) {
  return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
};
console.log(pythagorean(4, 3));

// task 3
const min = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
console.log(min(2, 5));

// task 4
const isEven = function (value) {
  if (value % 2 === 0) {
    return "true";
  }
  return "false";
};
console.log(isEven(4));

// task 5
const deleteChars = function (str) {
  return str.slice(1, -1);
};
console.log(deleteChars("Hello"));

// task 6
const someFn = function (str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};
console.log(someFn("javaScript"));

//task 7
const checkLetterCase = function (letter) {
  if (letter === letter.toUpperCase()) {
    return "Оууу май, большая буква!";
  }
  return "Нет уж, маленькие буквы - скучно";
};
console.log(checkLetterCase("a"));

// task 8
const concatenate = function () {
  const string1 = "Hello ";
  const string2 = "World";
  return string1 + string2;
};
console.log(concatenate());

// task 9
const checkStringLength = function (str, numb) {
  if (str.length > numb) {
    return "String is too long";
  }
  return "Hi";
};
console.log(checkStringLength("Hi", 1));
