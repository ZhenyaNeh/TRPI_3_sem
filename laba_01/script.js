//  1. Определить тип пепеменных    
let a = 5;          //Number
let name = "Name";  //String
let i = 0;          //Number
let double = 0.23;  //Number
let result = 1/0;   //Number
let answer = true;  //Boolean
let no = null;      //Object 


let type_A = typeof a;
console.log("Тип переменной a: " + type_A);
let type_Name = typeof name;
console.log("Тип переменной name: " + type_Name);
let type_I = typeof i;
console.log("Тип переменной i: " + type_I);
let type_Double = typeof double;
console.log("Тип переменной double: " + type_Double);
let type_Result = typeof result;
console.log("Тип переменной result: " + type_Result);
let type_Answer = typeof answer;
console.log("Тип переменной answer: " + type_Answer);
let type_No = typeof no;
console.log("Тип переменной no: " + type_No);

//  2. Сколько квадратов В со сторонами 5 мм поместятся в четырехугольник А (45мм х 21мм)
let size_Length = 45;
let size_Width = 21;
let side_Of_The_Sqeare = 5;

let area_Of_A_Rectangle = size_Length * size_Width;
console.log("Площадь четырехугольника: " + area_Of_A_Rectangle);

let area_Of_The_Square = Math.pow(side_Of_The_Sqeare,2);
console.log("Площадь квадрата: " + area_Of_The_Square);

let number_Of_Sqears = Math.floor(area_Of_A_Rectangle / area_Of_The_Square);

//  3. Сравните third_а и third_b 
let third_I = 2;
let third_A = ++third_I;  //a = 3
let third_B = third_I++;  //b = 3

//  4. Сравните и объясните «Котик» и «котик», «Котик» и «китик»,
//      «Кот» и «Котик»,  «Привет» и «Пока», 73 и «53», false и 0,
//      54 и true, 123 и false,   true и «3», 3 и «5мм», 8 и «-2», 34 и «34»,
//      null и undefined.  Использовать тернарный оператор.

let answer1 = "Котик" < "котик" ? "true" : "false"; //true
console.log(answer1);
let answer2 = "Котик" < "китик" ? "true" : "false"; //true
console.log(answer2);
let answer3 = "Кот"   < "Котик" ? "true" : "false"; //true
console.log(answer3);
let answer4 = "Привет" < "Пока" ? "true" : "false"; //false
console.log(answer4);
let answer5 = 73 < "53" ? "true" : "false";         //false
console.log(answer5);
let answer6 = false < 0 ? "true" : "false";         //false
console.log(answer6);
let answer7 = 54 < true ? "true" : "false";         //false
console.log(answer7);
let answer8 = 123 > false ? "true" : "false";       //true
console.log(answer8);
let answer9 = true < "3" ? "true" : "false";        //true
console.log(answer9);
let answer10 = 3 < "5mm" ? "true" : "false";        //false
console.log(answer10);
let answer11 = 8 < "-2" ? "true" : "false";         //false
console.log(answer11);
let answer12 = 34 < "34" ? "true" : "false";        //false
console.log(answer12);
let answer13 = null > undefined ? "true" : "false"; //false
console.log(answer13);





let mya = 5
let opl = 4^2
console.log(opl)






//  5. Пользователь вводит имя в диалоговое окно. Если имя совпало с именем преподавателя,
//  то выведите сообщение о том, что введенные пользователем данные верные.
//  Учтите, что пользователь может ввести только имя или имя и отчество, или полностью ФИО. 
//  Кроме того, данные могут быть введены в верхнем регистре. 

let user_Name = "Кудлацкая Марина Федоровна";

function check_Name(enter_Name){

    let normalized_User_Name = user_Name.toLowerCase();
    let normalized_Enter_Name = enter_Name.toLowerCase();

    if (normalized_User_Name.includes(normalized_Enter_Name)){
      console.log("Введенные данные верны!");
        return;
    }

    console.log("Введенные данные неверны!")
}
let check = 'Кудлацкая Марина Федоровна'
let enter_Name = prompt('Пожалуйста, введите ваше имя: ', check);

check_Name(enter_Name);

//  6. У студента 3 экзамена: русский, математика, английский. Если он сдаст все экзамены,
//   то его переведут на следующий курс. Если он не сдаст ни одного экзамена, то его отчислят.
//   Если он не сдаст хотя бы один экзамен, то его ожидает пересдача. Для решения задачи 
//   использовать логические операторы.

let russian_Exam_Passed = true;
let math_Exam_Passed = true;
let english_Exam_Passed = true;

if (russian_Exam_Passed && math_Exam_Passed && english_Exam_Passed) {
  console.log("Вы переведены на следующий курс!");
}
else if (!russian_Exam_Passed && !math_Exam_Passed && !english_Exam_Passed) {
  console.log("Вы отчислены!");
}
else if (!russian_Exam_Passed || !math_Exam_Passed || !english_Exam_Passed) {
  console.log("У вас пересдача!")
}

//  7. Вычислите и поясните: 
console.log(true + true);  //2
console.log(0 + "5");      // "05"
console.log(5 + "мм");     //5мм
console.log(8 / Infinity); //0
console.log(9 * "\n9");    //81
console.log(null - 1);     // -1
console.log("5" - 2);      //3
console.log("5px" - 3);    //NaN
console.log(true - 3);     //-2
console.log(7 || 0);       // 7

//  8. К каждому четному числу в диапазоне [1, 10] прибавьте 2, а каждое нечетное число
// преобразуйте к строке вида «Xмм», где X – нечетное число. Выведите результат.

for (let i = 1; i <= 10; i++) {
    if (isEven(i)) {
      console.log(i + 2);
        continue;
    }
    console.log(i + "мм");
}

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;   
}

//  9. По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс.
//  Номер дня вводит пользователь. Реализовать через объект и через массив.

const days_Of_The_Week_Obj = {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
    7: 'вс',
  };

  const days_Of_The_Week_Arr = [
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
    'вс',
  ];
  
  const number_Of_Days = Number(prompt('Введите номер дня недели (1-7):',1));
  
  function check_Obj_Days(number_Of_Days){
    if (number_Of_Days >= 1 && number_Of_Days <= 7) {
    const day = days_Of_The_Week_Obj[number_Of_Days];
    console.log(`Obj: Это день "${day}".`);
    return;
    } 
    console.log('Obj: Введен некорректный номер дня недели.'); 
  }

  function check_Arr_Days(number_Of_Days){
    if (number_Of_Days >= 1 && number_Of_Days <= 7) {
    const day = days_Of_The_Week_Arr[number_Of_Days - 1];
    console.log(`Arr: Это день "${day}".`);
    return;
    } 
    console.log('Arr: Введен некорректный номер дня недели.'); 
  }
  
  check_Obj_Days(number_Of_Days);
  check_Arr_Days(number_Of_Days);

//  10. Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию.
//  Третий параметр вводит пользователь. Функция возвращает строку из трех параметров.
function string_Сoncatenation(parm_1 = "jgug", parm_2, parm_3){
    let concatenation = parm_1 + " " + parm_2 + " " + parm_3;
    return concatenation;
}

let default_Parameter = 'Привет';
let second_Parameter = prompt("Введите второй параметр: ", "Eugene");
let third_Parameter = prompt("Введите третий параметр: ", "Nehaychick");

let result_Parameters = string_Сoncatenation(undefined , second_Parameter, third_Parameter);

console.log(result_Parameters);

//  11.	Известны стороны четырехугольника a и b. Если это квадрат, то функция params() возвращает
//  его периметр, если прямоугольник –  то площадь. Создайте params() как Function Declaration
//  и Function Expression, функцию стрелку.

let first_Side = 5;
let second_Side = 5;

function params_1(a, b) {
    if (a === b) {
      return 4 * a;
    } 
    return a * b; 
  }

const params_2 = function(a, b) {
    if (a === b) {
      return 4 * a;
    } 
    return a * b; 
  }

const params_3 = (a, b) => {
    if (a === b) {
      return 4 * a;
    } 
    return a * b; 
  }

console.log(params_1(first_Side, second_Side));
console.log(params_2(first_Side, second_Side));
console.log(params_3(first_Side, second_Side));


