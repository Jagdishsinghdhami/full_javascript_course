var a = "jagdish singh dhami";
// console.log(a);

// console.log(3 + 3);

// Types of DataTypes :

//  1. premitive data types

// Number => 2 to the power 53
// bigInt => after 2 to the power 53
// string => ""
// boolen => true/false
// null =>  standalone value
//  undefiend =>
// symbol => unique

// objects

// console.log(typeof "jagdish");
// console.log(typeof null);
// console.log(typeof undefined);

// DataTypes Conversions :

// let scroe = "33";

// console.log(typeof scroe);

// let valueInNumber = Number(scroe);
// console.log("valueInNumber => ", typeof valueInNumber);

// convert in Number() methods

// "33" => 33
//  "33abc" => NaN
// true => 1  && false => 0

// convert in Boolean value

let isLoggedIn = 1;

// console.log("isLoggedIn => ", Boolean(isLoggedIn));

// 1 => true && 0 => false
// "" => false
// "jagdish" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log("stringNumber => ", stringNumber);
// console.log(typeof stringNumber);

// ********************* OPERATIONS **********************

let value = 3;
let negValue = -value;
// console.log("negValue => ", negValue);

let str1 = "hello";
let str2 = " jagdish";
let str3 = str1 + str2;
// console.log("str3 => ", str3);

// console.log("1" + 2);
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// *************** Comparision of data types ***************

// Data Types :

//  Primitive Data Types :

//  7 types : number, string, boolean, null, undefined, symbol, string

// Refrence Data types (Non - premetive):

// Array, object, functions

// ********************** Stack and Heap memory ********************

// Premitive Data Types (stack memory)
// non premetive types (heap memory)

// ********************* Number and Math in javascript ********************

let score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const hundreds = 10000000;

// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Math);
// console.log(Math.round(4.3));
// console.log(Math.round(4.8));
// console.log(Math.abs(-4));

// console.log(Math.ceil(4.2)); // 5
// console.log(Math.ceil(4.9)); // 5

// console.log(Math.floor(4.2)); // 4
// console.log(Math.floor(4.9)); // 4

// console.log(Math.min(4, 5, 3, 8)); // 3

// console.log(Math.max(4, 7, 8, 5, 9)); // 9

// console.log(Math.random());
// console.log(Math.floor(Math.random().toFixed(2) * 100));

// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
