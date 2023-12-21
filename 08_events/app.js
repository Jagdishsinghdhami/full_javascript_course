// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

// attachEvent()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)

// document.querySelector("#images").addEventListener("click", function (e) {
//   console.log(e.target.tagName);
//   if (e.target.tagName === "IMG") {
//     console.log(e.target.id);
//     let removeIt = e.target.parentNode;
//     removeIt.remove();
//   }
// });

//removeIt.parentNode.removeChild(removeIt)

// --------------------- setTimeout and setInterval ---------------

// const sayHitesh = function () {
//   console.log("Hitesh");
// };
// const changeText = function () {
//   document.querySelector("h1").innerHTML = "best JS series";
// };

// const changeMe = setTimeout(changeText, 2000);

// document.querySelector("#stop").addEventListener("click", function () {
//   clearTimeout(changeMe);
//   console.log("STOPPED");
// });

// ------------------------ setInterval --------------

// const startValue = function () {
//   console.log("say hello => ", Date.now());
// };

// const stopInterval = setInterval(startValue, 1000);

// document.getElementById("stop").addEventListener("click", function () {
//   clearInterval(stopInterval);
// });

// document.getElementById("start").addEventListener("click", function () {
//   setInterval(stopInterval);
// });

// ----------------------- Random color generate -----------

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//generate a random color

// const randomColor = function () {
//   const hex = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

console.log(randomColor());
