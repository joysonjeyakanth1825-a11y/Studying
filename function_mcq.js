// 1
console.log(add(2,3));
function add(a,b){ return a+b; } //5
// 2
console.log(add(2,3));
var add = function(a,b){ return a+b; }//5
// 3
function test(){
  return;
  console.log("Hello");
}
console.log(test());//undefined
// 4
function test(a=5){
  return a;
}
console.log(test());nan

// 5
(function(){
  console.log("IIFE");
})();//IIFE
// 6
console.log(typeof function(){});
// 7
function test(){
  return 10;
}
console.log(test() + 5);//15
// 8
function outer(){
  let a = 10;
  function inner(){
    return a;
  }
  return inner();
}
console.log(outer());
// 9
function test(a,b){
  return a+b;
}
console.log(test(2));//nan
// 10
function test(){
  console.log(arguments.length);
}
test(1,2,3);//3