"use strict"

console.log("start");

document.getElementById("bt").addEventListener("click", checkAge);

function checkAge(min=10, max=50) {
  let str = {name:"john"};
  let num;
  
  num = document.getElementById("age").value;
  console.log("age = " + num);
  
  assert(Number(num) > 0, "age is zero below");
  document.getElementById("msg2").innerHTML = num;
}


function assert(condition, message) {
    if (!condition) {
      let err = new Error(message);
      let stack = err.stack.split('\n')
      let line = stack[1 + 1].split(':')
      
      console.log(parseInt(line[line.length - 2], 10));
      throw err;
    }
}
