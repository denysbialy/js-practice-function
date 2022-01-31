// Задача 1
const positiveNumber = function( num ){
    if(num % 2 === 0){
        return `Число ${num} четное`;
    } else {
        return `Число ${num} нечетное`;
    }
}
console.log(positiveNumber(10))

// Задача 2

const minNumber = function(num1, num2){
    if(num1 < num2){
        return `Первое число ${num1} меньше второго числа ${num2}`
    } else{
        return `Первое число ${num1} больше второго числа ${num2}`
    }
}
minNumber(10, 5);

// Задача 3 

const moneyForItem = function(money, item){
    let result = 0;

    if(money >= item){
        ++result
    }
    return Boolean(result)
}

moneyForItem(10, 5)

// Задача 4

const absolutlyNumeric = function(number){
    if(number < 0){
        return number *= -1
    } else{
        return number
    }    
}
console.log(absolutlyNumeric(-50))