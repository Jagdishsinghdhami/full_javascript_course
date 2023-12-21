// ---------------lexical scope example ---------------------------

function Outer() {
  let username = "jagdish";
  function inner() {
    console.log(`inner : ${username}`);
  }
  inner();
}
Outer();
