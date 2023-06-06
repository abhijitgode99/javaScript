

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];

console.log(`==== Step : 1. Log the array element with it's index using forEach() with arrow function`);
arrayNumbers.forEach( (element)=> {
    console.log(element);
})

console.log(`==== Step : 2. Find the positive number and log on console`);
arrayNumbers.forEach( (element)=> {
    if(element >= 0)  {
        console.log(element);
    }
})

console.log(`==== Step : 4. Find the evne number and log on console using arrow fun`);
arrayNumbers.forEach( (element)=> {
    if(element %2 == 0)  {
        console.log(element);
    }
})

console.log(`==== Step : 5. Find the sum of array elemtents and log on console using arrow fun`);
let sum=0;
arrayNumbers.forEach( (element)=> {
    sum=sum+element;
})
console.log(`sum: ${sum}`); 

console.log(`==== Step : 6. log only even indexed array value on console`);
arrayNumbers.forEach( (element,index)=> {
    if(index%2==0){
        console.log(element);
    }
})
