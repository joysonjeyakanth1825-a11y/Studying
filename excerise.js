let x=10
console.log(typeof x)

var stringValue ="100"
var StoredValue=StoredValue+stringValue;
console.log(StoredValue);


let arrayValue =[1,2,3]

if(Array.isArray(arrayValue))
{
    console.log("It is a array")
}
else{
    console.log("It is not a array")
}


let a=10;
let b=20;

a=a+b;
b=a-b;
a=a-b;

console.log(a,b)


let arrayNum=[10,"hello",true,25,"world",false]

let NumbersCount=0;
let StringsCount=0;
let BooleansCount=0;

for(i=0;i<=arrayNum.length;i++)
{
    if(typeof arrayNum[i]=="number")
    {
        NumbersCount++
    }
    else if(typeof arrayNum[i]=="string")
    {
        StringsCount++
    }
    else if(typeof arrayNum[i]=="boolean")
    {
        BooleansCount++
    }

}

console.log(NumbersCount)
console.log(StringsCount)
console.log(BooleansCount)

let valueCheck='100'

if(typeof valueCheck =='number')
{
    console.log("true")
}
else{
    console.log("false")
}

let nullCollestion;
nullCollestion =nullCollestion ?? 'hello';
console.log(nullCollestion)

