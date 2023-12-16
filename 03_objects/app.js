// SingleTon Object
// Object.create();

// Object Literals

const mySym = Symbol("key1");

const jsUser = {
  name: "jagdish singh",
  age: 24,
  [mySym]: "myKey1",
  location: "jaipur",
  email: "jagdish@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// jsUser.email = "dhamijagdish@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "jagdish@times.in";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello Js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "12351";
tinderUser.name = "jagdish singh dhami";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "jagdish singh",
      lastName: "dhami",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Js in hindi",
  price: 999,
  courseInstructor: "jagdish Dhami",
};

// console.log(course.courseName);
const { courseInstructor: name, price, courseName } = course;
console.log(name);
console.log(price);
console.log(courseName);
