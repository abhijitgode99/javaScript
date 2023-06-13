
// Assignment - JavaScript logical program
// const array = [10, 5, 'a', 'b', 'h', 11];
// Sort this array and print output with NUMBER and ALPHABET  seperately 

// Ex:Numbers: 5,10,11
// Alphabets: a,b,h


const array = [10, 5, 'a', 'b', 'h', 11];
console.log(`Given array : ${array}`);
let numArray=[];
let stringArray=[];
array.forEach(element => {
    let type=typeof(element);  
    if (type=="number") {
        numArray.push(element);
    }else{
        stringArray.push(element);
    }
});
const number=[...numArray];
console.log(`Numbers : ${number}`);
const string=[...stringArray];
console.log(`Alphabets : ${string}`);