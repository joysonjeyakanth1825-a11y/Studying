let arrValue = [0, null, undefined, "", "Hello", 42, false, true];

let resultValue = {
  truthy: 0,
  falsy: 0,
  nullish: 0,
  numbers: 0,
  strings: 0,
  booleans: 0
};

for (let i = 0; i < arrValue.length; i++) {
  let value = arrValue[i];

  if (typeof value === 'number') {
    resultValue.numbers++;
  } 
  else if (typeof value === 'string') {
    resultValue.strings++;
  }
}

console.log(resultValue);