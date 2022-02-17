// Задача 1
const positiveNumber = function (num) {
  if (num % 2 === 0) {
    return `Число ${num} четное`;
  } else {
    return `Число ${num} нечетное`;
  }
};
console.log(positiveNumber(10));

// Задача 2

const minNumber = function (num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};

// Задача 3
const isEnoughMoney = (money, item) => money >= item;

// Задача 4

const absolutlyNumeric = function (number) {
  if (number < 0) {
    return (number *= -1);
  } else {
    return number;
  }
};
console.log(absolutlyNumeric(-50));
