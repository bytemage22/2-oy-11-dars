const products = [
{ id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
{ id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
{ id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
{ id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
{ id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
{ id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 },
];

const students = [
{ id: 1, name: "Ali", age: 18, score: 85 },
{ id: 2, name: "Vali", age: 17, score: 52 },
{ id: 3, name: "Madina", age: 19, score: 95 },
{ id: 4, name: "Sardor", age: 18, score: 67 },
{ id: 5, name: "Aziza", age: 17, score: 43 },
{ id: 6, name: "Jasur", age: 20, score: 76 },
];

// > 1-masala. Qimmat mahsulotlar
console.log("1-masala. Qimmat mahsulotlar");

console.log(products.filter(product => product.price > 800));

// > 2-masala. Talabalar röyxati

console.log("2-masala. Talabalar röyxati");

let result = '';
students.forEach(student => {
  result += `${student.name} — ${student.score} ball; `;
});
console.log(result);

// > 3-masala. Çegirmali narxlar

console.log("3-masala. Çegirmali narxlar");

console.log(products.map(product => {
  return {
    name: product.name,
    price: product.price,
    discount: product.discount,
    finalPrice: product.price - product.price * product.discount / 100,
  };

}));

// > 4-masala. Talabani ID orqali topiş

console.log("4-masala. Talabani ID orqali topiş");

console.log(students.find(student => student.id === 4));

// > 5-masala. Omborda mahsulot bormi?

console.log("5-masala. Omborda mahsulot bormi?");

console.log(products.some(product => product.stock === 0) ? "Omborda tugagan mahsulot bor" : "Barça mahsulotlar mavjud");

// > 6-masala. Barça talabalar imtihondan ötganmi?

console.log("6-masala. Barça talabalar imtihondan ötganmi?");

console.log(students.every(student => student.score >= 60) ? "Barça talabalr imtihondan ötgan" : "Imtihondan ötmagan talabalar bor");

// > 7-masala. Mahsulotlarni narx bo‘yicha saralaş

console.log("7-masala. Mahsulotlarni narx bo‘yicha saralaş");

console.log(products.sort((a, b) => a.price - b.price));

// > 8-masala. Yuqori ball olgan talabalar

console.log("8-masala. Yuqori ball olgan talabalar");

console.log(students.filter(student => student.score >= 70).sort((a,b) => a.score - b.score).map(student => 
  ({
    name: student.name, 
    score: student.score,
  })

));

// > 9-masala. Çegirmali mahsulotlarni tekshiriş

console.log("9-masala. Çegirmali mahsulotlarni tekshiriş");

const newArray =products.filter(product => product.discount >= 10).map(product => {
  return {
    name: product.name,
    price: product.price,
    discount: product.discount,
    finalPrice: product.price - product.price * product.discount / 100,
  };
});
console.log(newArray);
console.log(newArray.some(product => product.finalPrice > 800));

// > 10-masala. Talabalar natijasi böyicha tahlil

console.log("10-masala. Talabalar natijasi böyicha tahlil");

console.log(students.filter(student => student.score >= 60));
console.log(students.sort((a, b) => a.score - b.score));
console.log(students.map(student => ({
  name: student.name,
  score: student.score,
})));
console.log(students.find(student => student.score > 90));
console.log(students.some(student => student.score > 90));
console.log(students.some(student => student.score > 90));
console.log(students.every(student => student.score >= 40));
console.log(students.forEach(student => console.log(`${student.name}: ${student.score} ball`)));