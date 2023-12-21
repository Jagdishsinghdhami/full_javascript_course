let btn1 = document.querySelector("button");
let body = document.querySelector("body");
let currentMode = "light";

// btn1.addEventListener("click", function () {
//   if (currentMode == "light") {
//     currentMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currentMode = "light";
//     body.classList.add("light");
//   }
// });

// ------------------ Objects --------------------

// const student = {
//   fullname: "jagdish singh",
//   marks: 70,
//   printMarks: function () {
//     return `marks : ${this.marks}`;
//   },
// };
// console.log(student);

// --------------map , filter & reduce example ----------

// let myArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

// const newArr = myArr.map((num) => {
//   return num * 10;
// });
// console.log(newArr);
// const filterArr = myArr.filter((num) => {
//   // return num % 2 === 0;
//   return num > 5;
// });
// console.log(filterArr);

// let myArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

// const reduceArr = myArr.reduce((acc, cval) => {
//   console.log(`acc : ${acc} & cval : ${cval}`);
//   return acc + Number(cval);
// }, 0);
// console.log(reduceArr);

// const sum = myArr.reduce((accumulator, currentValue) => {
//   console
//   return accumulator + currentValue;

// }, 0);
// console.log(sum);

// MAP , FILTER AND REDUCE methods

let myArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const mixMrthod = myArr
  .map((num) => {
    return num * 4;
  })
  .map((num) => {
    return num * 4;
  })
  .filter((num) => {
    return num > 40;
  })
  .filter((num) => {
    return num < 100;
  })
  .reduce((acc, val) => {
    return acc + val;
  });

// console.log(mixMrthod);

// const abc = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 9, 8];

// console.log(...new Set(abc));

// const uniqueArray = abc
//   .map((value, index, array) => array.indexOf(value) === index ? value : undefined)
//   .filter(value => value !== undefined);

// const uniqueArray = abc
//   .map((value, index, array) => {
//     console.log(
//       `value ${value} and  ${index} and ${array.indexOf(
//         value
//       )}  array : ${array}`
//     );
//     return array.indexOf(value) === index ? value : undefined;
//   })
//   .filter((value) => {
//     return value !== undefined;
//   });

// console.log(uniqueArray);

const abc = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 9, 8];

// console.log(...new Set(abc));

// const filterArr = abc
//   .map((val, index, arr) => {
//     return arr.indexOf(val) === index ? val : undefined;
//   })
//   .filter((val) => {
//     return val !== undefined;
//   });

// console.log(filterArr);

// -------------- High order function ------------------- foreach, map, filter, reduce, sort

const companies = [
  { name: "amazon", category: "product based", start: 1991, end: 2001 },
  { name: "facebook", category: "product based", start: 1998, end: 2008 },
  { name: "microsoft", category: "service based", start: 1996, end: 2007 },
  { name: "apple", category: "service based", start: 1994, end: 2007 },
  { name: "flipkart", category: "product based", start: 1999, end: 2010 },
];

// -------------------------- sort methods ------------------

// const sortMethods = companies.sort((c1, c2) => {
//   if (c1.start < c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortMethods = companies.sort((c1, c2) => (c1.name > c2.name ? 1 : -1));

// console.log(sortMethods);

// ----------------------- map methods ----------------------

// const mapCompany = companies.map((val, index) => {
//   return `${val.name}`;
// });
// console.log(mapCompany);

// --------------------- filter methods -----------------------------

// const filterCompany = companies.filter((val, arr, index) => {
//   if (val.category == "service based") {
//     return true;
//   }
// });

// console.log(filterCompany);

// const filterAge = ages.filter((val) => {
//   return val > 30;
// });

// console.log(filterAge);

const ages = [12, 45, 7, 8, 27, 32, 46, 23, 13, 15, 24, 24, 7, 8, 27, 65, 45];

// -------------------- reduce methods -----------

// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }
// console.log(sum);
// const shortAges = ages
//   .sort((c1, c2) => (c1 > c2 ? 1 : -1))
//   .map((val, index, arr) => {
//     return arr.indexOf(val) === index ? val : undefined;
//   })
//   .filter((val) => {
//     return val !== undefined;
//   });

// console.log(shortAges);

// for (let i = 0; i <= companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach((val, index) => {
//   console.log(`index : ${index} and value : ${val}`);
//   console.log(val);
// });

// companies.forEach(function (company, index) {
//   console.log(company);
// });

// ------------------------- Es6 :  Spread and Rest operator in javascript -------------

// Rest operator
// Rest Operator allows us to condense multiple elements into a single array.

// function restOperator(a, b, c, ...rest) {
//   console.log(rest);
//   return a + b + c;
// }
// const addNum = restOperator(2, 4, 5, 1, 7, 6, 9, 5);
// console.log(addNum);

// spread operator
// Spread Operators allow us to expand an array or object into its individual elements

const names = ["jagdish", "jazz", "ashok"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
// getNames(...names);

let students = {
  name: "jagdish",
  age: 24,
  hobbies: ["cricket", "bgmi", "traveling"],
};
// object destructure methods

// const { name, age, hobbies } = students;
// console.log(students.age);
// console.log(name);
// console.log(age);
// console.log(hobbies);

// const { ...rest } = students;

// console.log(rest);

// spread

var newStudent = {
  ...students,
  age: 25,
};
console.log(newStudent);
