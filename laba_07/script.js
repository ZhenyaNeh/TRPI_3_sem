//1.
function ProductInfo(number, size, color, price) {
  this.number = number;
  this.size = size;
  this.color = color;
  this.price = price;
}

let products = {};

products['Обувь'] = {};
products['Брюки'] = {};
products['Куртки'] = {};

products['Обувь']['Ботинки'] = [];
products['Обувь']['Кроссовки'] = [];
products['Обувь']['Сандалии'] = [];

products['Брюки']['Джоггеры'] = [];
products['Брюки']['Джинсы'] = [];
products['Брюки']['Карго'] = [];

products['Куртки']['Вощёные'] = [];
products['Куртки']['Ветровки'] = [];
products['Куртки']['Бомберы'] = [];

products['Обувь']['Ботинки'].push(new ProductInfo('001', 42, 'черный', 500));
products['Обувь']['Кроссовки'].push(new ProductInfo('002', 39, 'красный', 300));
products['Обувь']['Сандалии'].push(new ProductInfo('003', 37, 'белый', 250));

products['Брюки']['Джоггеры'].push(new ProductInfo('101', 32, 'серый', 500));
products['Брюки']['Джинсы'].push(new ProductInfo('102', 30, 'синий', 400));
products['Брюки']['Карго'].push(new ProductInfo('103', 34, 'зеленый', 600));

products['Куртки']['Вощёные'].push(new ProductInfo('201', 33, 'серый', 600));
products['Куртки']['Ветровки'].push(new ProductInfo('202', 35, 'черный', 500));
products['Куртки']['Бомберы'].push(new ProductInfo('203', 41, 'коричневый', 700));

//2.
function filter(prod, minPrice, maxPrice, targetSize, targetColor){

  for(let category in products[prod]){
    for(let i = 0; i < products[prod][category].length; i++){
      let product = products[prod][category][i];
      if(product.price >= minPrice && product.price <= maxPrice &&
        product.size === targetSize &&
        product.color === targetColor){
        console.log(product.number)
      }
    }

    // for(let product in products[prod][category]){
    // if(product.price >= minPrice && product.price <= maxPrice &&
    //       product.size === targetSize &&
    //       product.color === targetColor){
    //       console.log(product.number)
    //     }
    //   }
    
  }
}

filter('Обувь', 260, 600, 42, 'черный');

//3.
function NewProductInfo(number, size, color, basePrice, discount) {
  this.number = number;
  this.size = size;
  this.color = color;
  this.basePrice = basePrice;
  this.discount = discount;
  this.price = basePrice - (discount / 100 * basePrice)
}

let newProducts = {};

newProducts['Обувь'] = {};
newProducts['Брюки'] = {};
newProducts['Куртки'] = {};

newProducts['Обувь']['Ботинки'] = [];
newProducts['Обувь']['Кроссовки'] = [];
newProducts['Обувь']['Сандалии'] = [];

newProducts['Брюки']['Джоггеры'] = [];
newProducts['Брюки']['Джинсы'] = [];
newProducts['Брюки']['Карго'] = [];

newProducts['Куртки']['Вощёные'] = [];
newProducts['Куртки']['Ветровки'] = [];
newProducts['Куртки']['Бомберы'] = [];

newProducts['Обувь']['Ботинки'].push(new NewProductInfo('001', 42, 'черный', 500, 20));
newProducts['Обувь']['Кроссовки'].push(new NewProductInfo('002', 39, 'красный', 300, 10));
newProducts['Обувь']['Сандалии'].push(new NewProductInfo('003', 37, 'белый', 250, 15));

newProducts['Брюки']['Джоггеры'].push(new NewProductInfo('101', 32, 'серый', 500, 15));
newProducts['Брюки']['Джинсы'].push(new NewProductInfo('102', 30, 'синий', 400, 30));
newProducts['Брюки']['Карго'].push(new NewProductInfo('103', 34, 'зеленый', 600, 20));

newProducts['Куртки']['Вощёные'].push(new NewProductInfo('201', 33, 'серый', 600, 30));
newProducts['Куртки']['Ветровки'].push(new NewProductInfo('202', 35, 'черный', 500, 25));
newProducts['Куртки']['Бомберы'].push(new NewProductInfo('203', 41, 'коричневый', 700, 25));

Object.defineProperty(NewProductInfo, 'price',{
  enumerable: true, // Можно перечислять
  configurable: false, // Нельзя удалять
  writable: true // Можно изменять
});

Object.defineProperty(newProducts['Обувь']['Ботинки'][0], 'number', {
  enumerable: true, // Можно перечислять
  configurable: false, // Нельзя удалять
  writable: false // Нельзя изменять
});

console.log(newProducts['Обувь']['Ботинки'][0].price)


console.lof
newProducts['Обувь']['Ботинки'][0].price = 87;
console.log(newProducts['Обувь']['Ботинки'][0].price);

newProducts['Обувь']['Ботинки'][0].number = '007';
console.log(newProducts['Обувь']['Ботинки'][0].number)
