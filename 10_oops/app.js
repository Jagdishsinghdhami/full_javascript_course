// const user = {
//   username: "jagdish singh",
//   usercount: 8,
//   getUserDetails: function (hii) {
//     // console.log(`we have get user details ${hii}`);
//     console.log(`username : ${this.username}`);
//     console.log(`this : ${this}`);
//   },
// };

// console.log(user.username);
// user.getUserDetails("jazz");

// function User(username, loginCount, isLoggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;

//   return this;
// }

// when we don't use of new keywords then user values is override

// const userOne = User("jagdish", 12, true);
// const userTwo = User("dhamii", 9, false);

// when we use new kywords then we new copy of user and not override of values
// new keywords : new empty object create hota hai
//  constructor function call hota hai new keywords k wajah se

// const userOne = new User("jagdish", 12, true);
// const userTwo = new User("dhamii", 9, false);
// console.log(userOne);
// console.log(userTwo);

// const myArray = [1, 2, 3, [4, 5, [6, 7]]];
// console.log(myArray.flat(Infinity));

// ---------------------- class constructor class -------------------------

// class User {
//   constructor(username, password, email) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("jagdish singh", "123456", "jagdish@gmail.com");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// // ------------- behind the scene is above method ------------

// function UserOneT(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }
// UserOneT.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// UserOneT.prototype.changeUserName = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new UserOneT("jazz", "jazz@gmail.com", "jazzdfg");
// console.log(tea.encryptPassword());
// console.log(tea.changeUserName());

// --------------------------- Inheritance --------------------

// --------------------- Getter and Setter in Javascript ------------

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const jagdish = new User("jazz@gmail.com", "jazz@123");
console.log(jagdish.password);
