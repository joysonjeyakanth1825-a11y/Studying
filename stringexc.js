//Length of the string 

let aValue ='Hello welocome to js'

console.log(aValue.length)

//String reverse

let reverseSrting ="Hello welocome to js"
let value =""
for (let i = reverseSrting.length-1; i >0; i--) {
   value=value+reverseSrting[i];
}
console.log(value);

//remove the charater 

let valChar ="Thestring contaction"

let storeval=valChar.replace("contaction","")
console.log(storeval)
//Iterate Over Characters of a String in JS

let iteratestring ="the string Iterate"

for (let i = 0; i < iteratestring.length; i++) {
    const element = iteratestring[i];
    console.log(element)
}

//for loop for n number

let n=100;

let nvalue =0
for (let i = 0; i <= 100; i++) {
 nvalue=nvalue+i[n];
console.log(i)
}