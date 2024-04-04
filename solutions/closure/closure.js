// What is a closure in JavaScript, and how does it relate to callbacks? with example.

// lexical scoping
function outer() {
  let x = 40
  function inner() {
    console.log(x);
  }
  inner()
}

outer()

// Closure 
function outerFn() {
  let x = 90
   function inner(){
    console.log(x);
  }
  return inner
}


let res = outerFn()
console.log(res());

function greeting(message) {
  return function(name) {
    return `${message} ${name}`
  }
}

let sayHi = greeting('Hi')
let sayHello = greeting('Hello')

console.log(sayHi('shah fahid'));
console.log(sayHello('shah fahid'));