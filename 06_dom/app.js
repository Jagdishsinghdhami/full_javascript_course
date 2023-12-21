// const parent = document.querySelector(".parent");
// // console.log(parent);
// // console.log(parent.children);
// // console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }
// parent.children[1].style.color = "pink";

// const div = document.createElement("div");

// div.className = "main";
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title", "heading");
// div.style.backgroundColor = "green";
// div.style.padding = "12px";
// // div.innerText = "jagdish singh dhami";

// const addText = document.createTextNode("jagdish singh dhami");
// div.append(addText);
// document.body.appendChild(div);

// console.log(div);

function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("css");
addLanguage("html");
addLanguage("jQuery");
