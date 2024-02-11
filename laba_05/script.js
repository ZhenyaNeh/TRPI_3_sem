// 2.	Реализуйте каррированную функцию, которая рассчитывает объем прямоугольного параллелепипеда. Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, у которых одно ребро одинаковой длины.
console.log("Second Task");

function curry(f){
  return function(a) {
    return function(b) {
      return function(c) {
        return f(a, b, c);
      }
    }
  }
}

function volume(a, b, c){
  return a * b * c;
}

let curriedVoluem = curry(volume);
let testOne = curriedVoluem(1);
let testTwo = testOne(2);

console.log(curriedVoluem(1)(2)(3));
console.log(testOne(2)(3));
console.log(testTwo(3))

// 3.	Пользователь управляет движением объекта, вводя в модальное окно  команды left, right, up, down. Объект совершает 10 шагов в заданном направлении (т.е. высчитываются и выводятся в консоль соответствующие координаты) и запрашивает новую команду. Разработайте генератор, который возвращает координаты объекта, согласно заданному направлению движения. 
console.log("\n Third Task");

function* moveGenerator() {
  let x = 0;
  let y = 0;

  while (true) {
    const direction = yield { x, y };
    
    switch (Number(direction)) {
      case 1:
        x -= 10;
        break;
      case 2:
        x += 10;
        break;
      case 3:
        y += 10;
        break;
      case 4:
        y -= 10;
        break;
      case 5:
        return false;
      default:
        console.log('Неверная команда. Используйте left, right, up или down.');
    }
  }
}

const move = moveGenerator();

move.next("start").value;

for(let i = 0; ; i++){
  const newDirection = prompt('Введите новую команду (left - 1, right - 2, up - 3, down - 4 or EXIT):', 1);
  const { x, y } = move.next(newDirection).value;
  if(x == undefined || y == undefined)
    break;
  console.log(`Шаг ${i + 1}: x = ${x}, y = ${y}`);
}
console.log("Вы вышли из цикла");

// 4.	Какие переменные и функции сохраняются в глобальный объект window? Получите значения всех созданных переменных и функции, которые хранятся в глобальном объекте window. Переопределите переменные через глобальный объект.
console.log("\n Fourth Task");
var x = 20;

for(var prop in window){
  if(window.hasOwnProperty(prop)){
    console.log(prop + '_' + typeof(window[prop]));
  }
}


console.log(x)
window.x = 15;
console.log(x)