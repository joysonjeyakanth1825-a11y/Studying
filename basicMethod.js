// 1. Conditional Operator
let a = 10, b = 20;
let result = (a > b) ? a : b;
console.log(result);//20

// 2. Nullish Coalescing
let value = null;
let output = value ?? "Default";
console.log(output);//Default

// 3. Logical Operator
let x = true, y = false;
console.log(x && y);//false
console.log(x || y);//true

// 4. typeof
let data = "Hello";
console.log(typeof data);//string

// 6. Conditional Operator
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);//Adult

// 7. Nullish vs OR
let input = 0;
console.log(input || "OR Default");//OR Default
console.log(input ?? "Nullish Default");//Nullish Default(since it is 0 it is consider as 0)

// 8. Logical Operator
let valuea = 5;
let valueb = 10;
console.log(valuea < valueb && valueb > 0);//true


// 9. typeof Array
let arr = [1,2,3];
console.log(typeof arr);//object
console.log(Array.isArray(arr));//true

// 10. Type Conversion
let valuetype = true;
console.log(Number(valuetype));//1
console.log(String(valuetype));//'true'


// 11. Conditional + Logical
let harda = 10, hardb = 20, hardc = 15;
let max = (harda > hardb && harda > hardc) ? harda : (hardb > hardc ? hardb : hardc);
console.log(max);//10 (get explationaiton)

// 12. Nullish Chaining
let user = { name: "Joyson" };
console.log(user.address?.city ?? "No City");//no City

// 13. Logical Short Circuit
let datahard = "";
let resulthard = datahard && "Hello";
console.log(resulthard);//Hello {wrong need to understand}

// 14. typeof tricky
console.log(typeof null);//undefined {wrong object}
console.log(typeof NaN);//Number
console.log(typeof undefined)//undefined


// 15. Type Coercion
console.log("5" + 2); //52
console.log("5" - 2);//3
console.log(true + 1);//true1{wrong true is consider as one +1 =2}




// 1
console.log(null ?? "Hello");//Hello

// 2
console.log(0 ?? "World");//world{since first itself wrong it will not go to else}

// 3
console.log(0 || "World");//'world'

// 4
console.log(typeof null);//object

// 5
console.log(typeof undefined);//undefined

// 6
console.log(true && false);//true

// 7
console.log(true || false);//true

// 8
console.log("5" + 5);//55

// 9
console.log("5" - 2);//3

// 10
console.log(Boolean(0)); //false

let arrValue = [0, null, undefined, "", "Hello", 42, false, true];

let resultValue = {
  truthy: 0,
  falsy: 0,
  nullish: 0,
  numbers: 0,
  strings: 0,
  booleans: 0
};

// 👉 Write logic here

for (let i = 0; i < arrValue.length; i++) {
    // console.log("Entered into the loops")
   if( typeof arrValue[i]==='number') 
   {
resultValue.numbers++
// console.log("Entered into the")

   }
   else if(typeof arrValue[i]==='string')
   {
    resultValue++
   }
}

console.log(resultValue);