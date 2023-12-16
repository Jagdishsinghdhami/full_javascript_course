function sayMyName() {
  console.log("J");
  console.log("A");
  console.log("G");
  console.log("D");
  console.log("I");
  console.log("S");
  console.log("H");
}
// sayMyName();

// function addTwoNum(number1, number2) {
//   console.log(number1 + number2);
// }
// addTwoNum(4, 6);

function addTwoNum(number1, number2) {
  let number = number1 + number2;
  return number;
}
// console.log("number => ", addTwoNum(9, 4));

// function logInUser(username) {
//   if (username === undefined) {
//     console.log("please enter a usename");
//     return;
//   }
//   return `${username} Just login`;
// }

function logInUser(username = "jazz") {
  if (!username) {
    console.log("please enter a usename");
    return;
  }
  return `${username} Just login`;
}

// console.log(logInUser());

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
  username: "jagdish",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// console.log(handleObject(user));

const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));

// ************** Global and Local scope in javascript **************

if (true) {
  // let a = 1;
  // const b = 2;
  // var c = 3;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "jagdish singh";
  function two() {
    const website = "youtube.com";
    console.log(username);
  }
  // console.log(website);
  // two();
}
// one();

// ****************** This & arrow function ************

const user1 = {
  username: "jagdish",
  price: 999,
  welcomemessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};
// user1.welcomemessage();
// user1.username = "jazz dhami";
// user1.welcomemessage();

// ******************* Immediatly Invoked function expression  (IIFE) **********

// (function chai() {
//   console.log(`db connected`);
// })();

// ((user) => {
//   console.log(`db connected by ${user}`);
// })("jagdish");

// ***********************************

// const userLogIn = true;
// const debitCard = true;

// if (userLogIn && debitCard) {
//   console.log("allow to buy courses");
// }

// *************** switch case ************************

// const month = 3;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("FeBURARY");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("aprail");
//     break;
//   default:
//     console.log("last month");
//     break;
// }

// falsy values :

// false, 0 , -0, bigInt 4n, "", undefined, null, nan

// truty values : true , "0", "false", [], {}, function(){}
