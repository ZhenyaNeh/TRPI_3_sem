//1. Объедините два массива с вложенностью используя reduce().
console.log("First task");
const arr1 = [1, [1, 2, [3, 4]], [2, 4]];

function combineArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return accumulator + combineArray(currentValue);
    } else {
      return accumulator + currentValue;
    }
  }, []);
}

const result1 = combineArray(arr1);
console.log('[' + result1 + ']');

//2. Найдите сумму элементов массива, если вложенность массива неизвестна.  	
console.log("\nSecond task");

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return accumulator + sumArray(currentValue);
    } else {
      return accumulator + currentValue;
    }
  }, 0);
}

const result2 = sumArray(arr1);
console.log(result2);

// 3.Напишите функцию, которая на вход принимает массив из студентов, 
// где студент — это объект с полями «имя», «возраст» и «номер группы» 
// {name: string, age: number, groupId: number}, а на выходе возвращает объект, 
// где ключ — это номер группы, а значение — массив из студентов старше 17 лет.
console.log("\nThird task");

function filterStudentsByAge (students){
  let result = [{key: 0, value: 0}];

  for (const student of students) {
    if (student.age > 17) {
      if (result[student.groupId] != null) {
        result[student.groupId].push(student);
      } else {
        result[student.groupId] = [student];
      }
    }
  }
  return result;
}

const students = [
  { name: 'Студент1', age: 18, groupId: 1 },
  { name: 'Студент2', age: 20, groupId: 2 },
  { name: 'Студент3', age: 16, groupId: 1 },
  { name: 'Студент4', age: 19, groupId: 2 },
  { name: 'Студент5', age: 21, groupId: 3 },
];

const result_Student = filterStudentsByAge(students);

for (let i = 1; i < result_Student.length; i++){
  console.log( i + ':');
  for (let student of result_Student[i]){
    console.log( 'Name: ' + student.name + ' Age: ' + student.age)
  }
}


// 4. Вам дана строка, состоящая из символов ASCII. Переведите символы в код - 
// число total1, замените все цифры 7 на 1 - число total2. И вычтите из total1 число total2.
// Пример:  'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
//total1 = 656667, total2 = 656661
console.log("\nFourth task");

function calculateTotals(inputString) {
  let total1 = '';
  let total2 = '';

  for (let i = 0; i < inputString.length; i++)
    total1 += inputString[i].charCodeAt();
  
  for (let i = 0; i < total1.length; i++){
    if(total1[i] == '7'){
      total2 += '1';
      continue;
    }
    total2 += total1[i];
  }

  console.log(total1);
  console.log(total2);
  console.log(total1 - total2);
}

const inputString = 'ABC';
calculateTotals(inputString);

// 5. Создайте функцию, которая принимает несколько объектов в качестве параметров и возвращает 
//НОВЫЙ объект со всеми свойствами из входных объектов. Для объединения объектов и создания НОВОГО объекта использовать метод assign
// Примеры:
//  extend( {a: 1, b: 2}, {c: 3} ) 
//  // result === {a: 1, b: 2, c: 3}
//  extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) 
//  // result === {a: 1, b: 2, c: 3, d: 4}
//  extend( {a: 1, b: 2}, {a: 3, c: 3} ) 
//  // result === {a: 1, b: 2, c: 3}
console.log("\nFifth task");

function Union (... objects){
  const result = {};
  Object.assign(result, ...objects);
  return result;
}

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3};
const obj3 = {c: 4};

const union1 = Union(obj1);
const union2 = Union(obj1, obj2);
const union3 = Union(obj1, obj2, obj3);

console.log('первое объединение: ' + Object.values(union1));
console.log('второе объединение: ' + Object.values(union2));
console.log('третье объединение: ' + Object.values(union3));
// 6. Создайте башню-пирамиду, состоящую из символов "*". В качестве входного параметра приходит число этажей башни.
// Пример:
// Башня с 3 этажами
//  [
//    "  *  ",
//    " *** ", 
//    "*****"
//  ]
console.log("\nSixth task");

const symbol = '*';
const symbolEmpty = " ";
const hight = 7;

for (let i = hight, j = 1; i > 0; i--){
  console.log(symbolEmpty.repeat(i) + symbol.repeat(j));
  j +=2;
}

