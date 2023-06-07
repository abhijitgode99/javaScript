


const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]

console.log("======== Step 1: Add 10 into each element ========");
const arrayTrans = arrayNumbers.map( (element) => {
    return element+10;
} );
console.log(arrayTrans);

console.log("======== Step 2: Square the each array element and log ========");
const arrayTrans1 = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTrans1);

console.log("======== Step 3: Add the index value into its corresponding each array element and log");
const arrayTrans3 = arrayNumbers.map( (element,index) => {
    return element+index;
} );
console.log(arrayTrans3);


