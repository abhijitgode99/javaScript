console.log(`==== Traversing array =====`);

var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
for (let index = 0; index < arrayNames.length; index++) {
    const element = arrayNames[index];
    console.log(element);
}

console.log(`------------ for in loop -----------------`);
for (const index in arrayNames) {
    console.log(arrayNames[index]);
}

console.log(`------------ for of loop -----------------`);
for (const element of arrayNames) {
    console.log(element);
}

console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}

console.log(`---------- join() ------------`);
let names = arrayNames.join(", ");
console.log(names);

const arrayBoys = ["Anil", "Ram" ,"Sunil"];
let arrayGirls = ["Siya", "Jenny"]
let combineArray =  arrayBoys + arrayGirls;
console.log(combineArray);

let concatArray =  arrayBoys.concat(arrayGirls);
console.log(concatArray);

console.log(`------ Resize an array -------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.log(arrayNames);