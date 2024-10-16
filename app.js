// 1-MASALA.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)

// SOLUTION

// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//     return students
//         .map((student) => {
//             if (student.percent > 60 && student.percent < 70) {
//                 return {...student, grade: 3 };
//             } else if (student.percent >= 70 && student.percent < 85) {
//                 return {...student, grade: 4 };
//             } else {
//                 return {...student, grade: 5 };
//             }
//         })
//         .filter((student) => student.grade == grade)
//         .map((student) => student.name);
// }
// const result = getNamesByGrade(students, 5);
// console.log(result);

// 2-MASALA.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {
//     dog: 2,
//     chicken: 3,
//     cat: 1,
//     rabbit: 1
//  }

// SOLUTION

// const animals = [
//     "dog",
//     "chicken",
//     "cat",
//     "dog",
//     "chicken",
//     "chicken",
//     "rabbit",
// ];

// const birXil = animals.reduce((acc, curVal) => {
//     if (acc[curVal]) {
//         acc[curVal] = acc[curVal] + 1;
//     } else {
//         acc[curVal] = 1;
//     }
//     return acc;
// }, {});
// console.log(birXil);

// 3-MASALA.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)

// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// SOLUTION

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num) => num ** 2);
// console.log(result);

// 4-MASALA.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)

// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42

// SOLUTION

// const numbers = [1, -4, 12, 0, -3, 29, -150];
// const result = numbers
//     .filter((num) => num > 0)
//     .reduce((acc, curVal) => (acc += curVal), 0);

// console.log(result);

// 5-MASALA.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'

// SOLUTION

// const text = "George Raymond Richard Martin";
// const result = text
//     .split(" ")
//     .map((item) => item[0])
//     .join("");
// console.log(result);

// 6-MASALA.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54

// SOLUTION

// const ages = [
//     { name: "John", age: 13 },
//     { name: "Mark", age: 56 },
//     { name: "Rachel", age: 45 },
//     { name: "Nate", age: 67 },
//     { name: "Jeniffer", age: 65 },
// ];
// const result = ages.sort((a, b) => a.age - b.age);
// console.log(result.at(-1).age - result[0].age);

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

// PRODUCTS MASSIVI (9-15 MASALALAR UCHUN)

let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
// 9-MASALA. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

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

// 10-MASALA. Rating bo'yicha eng kuchli product topilsin. (sort)

// SOLUTION

// const bestRating = [...products].sort((a, b) => a.rating - b.rating);
// console.log(bestRating.at(-1));

// 11-MASALA. Narxi eng past bo'lgan product topilsin. (sort)

// SOLUTION

// const lowestPrice = [...products].sort((a, b) => a.price - b.price);
// console.log(lowestPrice.at(0));

// 12-MASALA. Barcha products narxlari yig'indisi topilsin. (reduce)

// SOLUTION

// const allPrice = products.flatMap((product) => {
//     return product.price;
// });
// const sumPrice = allPrice.reduce((acc, curVal) => acc + curVal);
// console.log("Narxlari yig'indisi", sumPrice);

// 13-MASALA. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)

// SOLUTION
// const allNames = products.flatMap((product) => {
//     return product.name;
// });
// console.log(allNames);

// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)

// SOLUTION
// const idFive = products.find((product) => {
//     return product.id == 5;
// });
// console.log("IDsi 5 tovar bu: ", idFive.name);

// 15-MASALA. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

// SOLUTION
// const idNofour = products.filter((product) => {
//     return product.id !== 4;
// });
// console.log(idNofour);

// 16-MASALA. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)

// const str = "Hayrli kun";
// const harf = str.split("").every((char) => {
//     return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
// });
// console.log(harf);

// 17-MASALA. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "", null, 0]}

// SOLUTION
// const arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(Boolean);
//     const falsy = arr.filter((item) => !Boolean(item));
//     return { truthy, falsy };
// }
// const result = getTruthyFalsy(arr);
// console.log(result);

// 18-MASALA. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)
// Input: "Men Abdulaziz Programmerman"
// Output: [3, 9, 13]

// SOLUTION
// const sozlar = "Men Dadahon developerman";
// const count = sozlar.split(" ").map((harflar) => harflar.length);
// console.log(count);

// 19-MASALA. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
// Input: "Men Abdulaziz Programmerman"
// Output: true

// SOLUTION
// const sozlar = "Men Dadahon developerman";
// const boshJoy = sozlar.split("").some((harflar) => harflar.includes(" "));
// console.log(boshJoy);

// 20. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat massiv qaytaring. (Object.entries, map, join)

// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']

// SOLUTION
// const obj = { a: 2, b: 5, c: 7 };
// const result = Object.entries(obj).map((abc) => {
//     return abc.join("");
// });
// console.log(result);

// 21-MASALA. Sonning raqamlari yig'indisini hisoblab beradigan digitSum() funksiya yozing. (rekursiv funksiya)

// SOLUTION
// let son = 10;
// let counter = 0;

// function calc() {
//   counter += son;
//   son--;
//   if (0 < son) {
//     calc();
//   }
// }
// calc();
// console.log(counter);

// 22-MASALA. Quyidagi pupils massividagi barcha o 'quvchilarni protcentlarining o'rtacha qiymatini toping.(reduce)

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// SOLUTION

// const result = pupils.flatMap((pupil) => {
//     return pupil.protcent;
// });
// console.log(result);
// const averagePr = result.reduce((acc, curVal) => (acc += curVal), 0);
// console.log("Javob:", averagePr / result.length - 1);

// 23-MASALA. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)

// SOLUTION

// const baho = pupils.map((pupil) => {
//   if (pupil.protcent > 90 && pupil.protcent < 100) {
//     return { ...pupil, grade: 5 };
//   } else if (pupil.protcent > 80 && pupil.protcent < 90) {
//     return { ...pupil, grade: 4 };
//   } else {
//     return { ...pupil, grade: 3 };
//   }
// });
// console.log(baho);

// 24-MASALA. isPassed propertyga protcent 70 dan o'tsa true, aks holda false qiymat o'zlashtirilsin. (map)

// 25-MASALA. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce)

// SOLUTION 24-25

// const result = pupils.map((pupil) => {
//   return { ...pupil, isPassed: pupil.protcent > 70 };
// });
// console.log("24-MASALA JAVOBI:", result);
// const javob = result.reduce(
//   (acc, curVal) => {
//     curVal.isPassed
//       ? (acc.passed = acc.passed + 1)
//       : (acc.failed = acc.failed + 1);
//     return acc;
//   },
//   {
//     passed: 0,
//     failed: 0,
//   }
// );
// console.log("25-MASALA JAVOBI", javob);
