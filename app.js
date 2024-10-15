// 7-MASALA.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// SOLUTION

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const oddNum = numbers.filter((num) => num % 2 == 1);
// const evenNum = numbers.filter((num) => num % 2 == 0);
// console.log(oddNum);
// console.log(evenNum);

// 8-MASALA.  N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)

// SOLUTION

// const numbers = [1, 2, 3, 2, 4, 5, 6, 7, 4, 8];
// const result = numbers.reduce((acc, curVal) => {
//     if (!acc.includes(curVal)) {
//         acc.push(curVal);
//     }
//     return acc;
// }, []);
// console.log(result);

// 9-MASALA. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

// let products = [{
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// SOLUTION

// const byId = [...products].sort((a, b) => a.id - b.id);
// console.log("Id bo'yicha", byId);
// const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
// console.log("Nomi bo'yicha", byName);
// const byPrice = [...products].sort((a, b) => a.price - b.price);
// console.log("Narxi bo'yicha", byPrice);
// const byRating = [...products].sort((a, b) => a.rating - b.rating);
// console.log("Reytingi bo'yicha", byRating);
// const byDiscount = [...products].sort((a, b) => a.discount - b.discount);
// console.log("Chegirmasi bo'yicha", byDiscount);