// 1. Write a function to reverse a string without using built-in methods

const name =(strvalue)=>
{
for (let i = strvalue.length-1; i >=0; i--) {
    console.log(strvalue[i])
   
}
}
name("Joyson")


// 2. Write a function to count vowels in a string

const countnum =(strvalue)=>
{
    let countval =0;
   for (let i= 0; i < strvalue.length; i++) {
    // console.log(strvalue[i]);
  if(strvalue[i]==='a'||strvalue[i]==='e'||strvalue[i]==='i'||strvalue[i]==='o'||strvalue[i]==='u')
  {
    countval++
  }
   }
   return countval
}
console.log("the final value",countnum("hello world"))

// 3. Write a function to find the maximum number in an array
let maxvalue=[30,33,8,90,10]
let cal =maxvalue[0];

for (let i = 1; i < maxvalue.length; i++) {
  // const element = array[index];
if(maxvalue[i]>cal)
{
  cal=maxvalue[i];
}
  
}
console.log(cal,"the biggest number in the array")


// 4. Remove duplicates from array

  let dname= (arr)=>
  {

    for (let i= 0; i < arr.length-1; i++) {
    
      for (let j = 1; j <= arr.length-1; j++) {
        if(arr[i]!==arr[j])
        {
          return arr;
        }
      }
    }

  }


  console.log(dname([10,20,10,40]),"With out duplicate value")