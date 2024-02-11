// 1.	Имеется список товаров. Реализуйте функции, которые добавляют,
//  удаляют товар из списка, проверяет наличие товара. Определите 
//  количество имеющего товара. Используйте коллекцию Set.  
console.log("First task");

const inventory = new Set();

function addProduct(product) {
  inventory.add(product);
  console.log(`Товар "${product}" добавлен.`);
}

function removeProduct(product) {
  if (inventory.delete(product)) {
    console.log(`Товар "${product}" удален`);
    return;
  }
  console.log(`Товар "${product}" не найден`);
}

function hasProduct(product) {
  if (inventory.has(product)) {
    console.log(`Товар "${product}" существует`);
    return;
  }
  console.log(`Товар "${product}" отсутствует`);
}

function clearddddd(){
  if(inventory.clear())
    console.log("колекция очищена")
}

function countProduct(product) {
  let count = 0;
  for (let prod of inventory) {
    if (prod == product)
      count++;
  }
  console.log(`Количество товара"${product}": ${count}`);
}

addProduct("Мышка");
addProduct("Клавиатура");
addProduct("Монитор");

clearddddd();

hasProduct("Мышка");
hasProduct("Ноутбук");
removeProduct("Мышка");
addProduct("Мышка");
removeProduct("hjkgj");
countProduct("Мышка");

// 2.	Используя коллекцию Set создайте список студентов. 
// О каждом студенте содержится информация: 
// номер зачетки, группа, ФИО. Создайте функции, которые:
// - добавляют студента, 
// - удаляют по номеру, 
// - фильтруют список по группе, 
// - сортируют по номеру зачетки. 
console.log("\nSecond task");

const studentSet = new Set();

function addStudent(student) {
  studentSet.add(student);
  console.log(`Студент "${student.fullName}", группы: ${student.group} добавлен.`);
}

function showStudents() {
  for (let student of studentSet) {
    console.log(`Имя: "${student.fullName}" группа: ${student.group} Номер: ${student.recordBookNumberc}`);
  }
}

function removeByRecord(recordNumber) {
  for (let student of studentSet) {
    if (student.recordBookNumber == recordNumber) {
      studentSet.delete(student);
      console.log(`Студент "${student.fullName}", группы: ${student.group} удален.`);
      return;
    }
  }
  console.log(`Нет студента с номером зачетки (${recordNumber})`)
}

function filterByGroup(group) {
  console.log(`\nФильтруют список по группе: ${group}`);
  let filterByGroupArray = Array.from(studentSet).filter(student => student.group === group);
  for (let stud of filterByGroupArray)
    console.log(stud);
}

function sortedByrecordNumber() {
  console.log(`\nCортируют по номеру зачетки`);
  let sortRecord = Array.from(studentSet).sort((x, y) => x.recordBookNumber - y.recordBookNumber)
  for (let stud of sortRecord)
    console.log(stud);
}

addStudent({
  recordBookNumber: 12345,
  group: 'A',
  fullName: 'Иванов Иван Иванович'
});
addStudent({
  recordBookNumber: 54321,
  group: 'B',
  fullName: 'Петров Петр Петрович'
});
addStudent({
  recordBookNumber: 87639,
  group: 'A',
  fullName: 'Нехайчик Евгений Владимирович'
});
addStudent({
  recordBookNumber: 83543,
  group: 'B',
  fullName: 'Щербакова Алина Николаевна'
});
addStudent({
  recordBookNumber: 34569,
  group: 'A',
  fullName: 'Споткай Дмитрий Генадьевич'
});
addStudent({
  recordBookNumber: 46473,
  group: 'B',
  fullName: 'Кудлацкая Марина Федоровна'
});

removeByRecord(12345);
filterByGroup('B');
sortedByrecordNumber();


// 3.	Используя коллекцию Map и ее методы, реализуйте хранилище товаров. 
// В корзине хранится информация о товаре: id (ключ в коллекции Map), 
// название, количество товара, цена. Разработайте функции, которые:  
// - добавляют товар, 
// - удаляют товар из списка по id, 
// - удаляют товары по названию (учтите, что названия товаров могут повторяться), 
// - изменяют количество каждого товара,
// - изменяют стоимость товара.
// Рассчитайте количество позиций в списке и сумму стоимости всех товаров.
console.log("\nThird task");

const productStore = new Map();

function addMapProduct(id, name, count, price) {
  if (productStore.has(id)) {
    console.log(`Товар с id ${id} уже существует`);
    return;
  }

  const productInfo = {
    name: name,
    count: count,
    price: price
  };
  productStore.set(id, productInfo); ''
}

function removeMapProductById(id) {
  if (productStore.has(id)) {
    const delProduct = productStore.get(id);
    productStore.delete(id);
    console.log(`Товар "${delProduct.name}" удален`);
    return;
  }

  console.log(`Товар с id ${id} не найден`);
}

function removeMapProductByName(nameNeedRemove) {
  let countDellElement = 1;
  for (let dell of productStore.keys()) {
    const product = productStore.get(dell);
    if (product.name == nameNeedRemove) {
      productStore.delete(dell);
      console.log(`${countDellElement}. подукт у которого имя "${nameNeedRemove}" удален`)
      countDellElement++;
    }
  }
  if (countDellElement == 1)
    console.log(`В нашем списке нет продукта с названием "${nameNeedRemove}"`)
}

function updateMapProductCount(id, newCount) {
  if (productStore.has(id)) {
    const product = productStore.get(id);
    product.count = newCount;
    console.log(`Количество товара "${product.name}" с id ${id} обновлено`);
    return;
  }

  console.log(`Товар с id ${id} не найден`)
}

function updateMapProductPrice(id, newPrice) {
  if (productStore.has(id)) {
    const product = productStore.get(id);
    product.price = newPrice;
    console.log(`Цена товара "${product.name}" с id ${id} обновлена`);
    return;
  }

  console.log(`Товар с id ${id} не найден`)
}

function getCountAndPrice(){
  let totalPrice = 0;
  let totalCount = 0;

  for(const product of productStore.values()){
    totalCount++;
    totalPrice += product.price * product.count;
  }
  console.log(`Количество позиций: ${totalCount} Цена товаров: ${totalPrice}`)
}

addMapProduct(1, "Мышка", 2, 20);
addMapProduct(2, "Клавиатура", 1, 30);
addMapProduct(3, "Монитор", 1, 30);
addMapProduct(4, "Клавиатура", 1, 30);
addMapProduct(5, "Наушники", 1, 30);
removeMapProductById(1);
removeMapProductByName("Клавиатура");
updateMapProductCount(3, 30);
updateMapProductPrice(3, 100);
getCountAndPrice();
// 4.	Создайте коллекцию WeakMap для кеширования результатов функции.
// WeakMap должен содержать входные параметры функции и результаты расчета.
// Функция должна выполняться только в том случае, если в кэше нет данных, иначе – берем данные из WeakMap.
console.log("\nFourth task");

let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = 23;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

let obj = {name: "John"};

let result1 = process(obj);
let result2 = process(obj);

obj = null;
const na = cache.has(obj);
console.log(na)
