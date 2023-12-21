// for loop

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log("index => ", index);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`inner loop value ${j} and outer loop value ${i}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let myArr = ["flash", "batman", "superman"];

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// ------------------ while loop & do-while loop ---------------

// let index = 0;
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

let myArr = ["flash", "batman", "superman"];

// let arr = 0;

// while (arr < myArr.length) {
//   console.log(`value of heros ${myArr[arr]}`);
//   arr++;
// }

// let score = 1;

// do {
//   console.log(`score is ${score}`);
//   score++;
// } while (score <= 10);

// ------------------- high order array loops --------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i of arr) {
//   // console.log(`value of new loop ${arr[i]}`);
//   console.log(`value of  loop ${i}`);
// }

// const greeting = "Jagdish singh dhami";

// for (let greet of greeting) {
//   console.log(`each cracter of greeting ${greet}`);
// }

// Map

// const map = new Map();

// map.set("In", "india");
// map.set("usa", "united state");
// map.set("fr", "france");
// map.set("in", "india");

// // console.log(map);

// for (let [key, value] of map) {
//   console.log(`${key} -- ${value}`);
// }

// const myObj = {
//   js: "javascript",
//   cpp: "c++",
//   html: "hyper text",
// };
// for (let key in myObj) {
//   console.log(`key in ${key} and key value is ${myObj[key]}`);
// }

// for-each loop

// let coding = ["js", "html", "css", "java", "c++"];
// coding.forEach((val) => {
//   console.log(`value of language ${val}`);
// });

const myCoding = [
  {
    languageName: "javascript",
    shortcut: "js",
  },
  {
    languageName: "hyper text",
    shortcut: "ht",
  },
  {
    languageName: "python",
    shortcut: "py",
  },
];

// myCoding.forEach((val) => {
//   console.log(`my coding language full name ${val.languageName}`);
// });

// ---------------------- Filter map & reduce --------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((item) => item > 4);
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(`newNums : ${newNums}`);

const books = [
  { title: "book 1", genere: "friction", publish: 1981, edition: 2004 },
  { title: "book 2", genere: "non friction", publish: 1987, edition: 2009 },
  { title: "book 3", genere: "magic", publish: 1984, edition: 1999 },
  { title: "book 4", genere: "friction", publish: 1999, edition: 2001 },
  { title: "book 5", genere: "science", publish: 1991, edition: 1993 },
  { title: "book 6", genere: "history", publish: 1984, edition: 2008 },
  { title: "book 7", genere: "magic", publish: 1981, edition: 2004 },
];

// const partbookName = books.filter((bk) => bk.genere === "friction");

// const partbookName = books.filter((bk) => {
//   return bk.publish > 2000;
// });

// console.log(`partbookName is ${partbookName}`);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40)
//   .filter((num) => num <= 80);

// console.log(newNums);

const myTotal = myNums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(myTotal);
