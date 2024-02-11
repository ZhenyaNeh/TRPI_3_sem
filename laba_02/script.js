// 1.	Функция basicOperation принимает три аргумента:
//  оператор (строка) и два операнда (числа); возвращает результат вычисления.
//   Допишите функцию, которая может принимать операторы +, -, *, /. 
// function basicOperation(operation, value1, value2) {
//     return result;
// }
//let result = basicOperation('+', 5, 10); // result = 15

function basicOperation(operator, value1, value2) {
  if(operator == '+'){
    return value1 + value2
  }

  if(operator == '-'){
    return value1 - value2
  }

  if(operator == '*'){
    return value1 * value2
  }

  if(operator == '/' && value2 !=0 ){
    return value1 / value2
  }

  return 'Error'
}

let result_1 = basicOperation('+', 5, 6)
console.log(result_1)
let result_2 = basicOperation('-', 5, 6)
console.log(result_2)
let result_3 = basicOperation('*', 5, 6)
console.log(result_3)
let result_4 = basicOperation('/', 30, 6)
console.log(result_4)
let result_5 = basicOperation('/', 5, 0)
console.log(result_5)

function cube ( number_N){
  let result = 0
  for(let i = 0; i <= number_N; i++){
    result += i**3
  }
  return result
}

let number_N = 5
console.log(cube(number_N))


function average (arrayNumber){
  let result = 0
  for(let i = 0; i < arrayNumber.length; i++){
    result += arrayNumber[i]
  }
  return (result/arrayNumber.length).toFixed(2);
}

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(average(arrayNumber));


function onlyReverseEnglish(str) {
  const onlyEnglish = str.replace(/[^a-z A-Z!]/g, '');
  const reverse = onlyEnglish.split('').reverse().join('');
  return reverse;
}

const inputStr = "Привет, !dlroW olleH 123";
console.log(onlyReverseEnglish(inputStr))

function repeat(str, count){
  let resultStr = str;

  for(let i = 1; i < count; i++){
    resultStr += str;
  }

  return resultStr;
}

const justString = 'hello!';
const count = 5;
console.log(repeat(justString, count));

// 6.Напишите функцию, которая принимает два массива строк arr1 и arr2. Функция
//  возвращает массив arr3, которые содержит строки из arr1, но не входящие в arr2.

function filterStrings(arr1, arr2) {
  const arr3 = [];

  for (const str of arr1) {
    if (!arr2.includes(str)) {
      arr3.push(str);
    }
  }

  return arr3;
}

const arr1 = ["apple", "samsung", "xiaomi", "realme"];
const arr2 = ["apple", "xiaomi", "poco"];
const result = filterStrings(arr1, arr2);
console.log(result);
