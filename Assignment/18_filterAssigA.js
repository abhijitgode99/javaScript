



let arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array : ${arrayNumbers}`);
console.log(`Step : 1.Find out all the numbers which are greater than 50 and log on console`);
let newarray=arrayNumbers.filter((element)=>{
   return element > 50
} );
console.log(newarray);

console.log(`Step : 2.find all even number and log on console`);
newarray=arrayNumbers.filter((element)=>{
   return element % 2 == 0;
} );
console.log(newarray);

console.log(`Step : 3.find all odd number and log on console`);
newarray=arrayNumbers.filter((element)=>{
   return element % 2 != 0;
} );
console.log(newarray);

console.log(`Step : 4.find all number multiple of 5 and log on console`);
newarray=arrayNumbers.filter((element)=>{
   return element % 5 == 0;
} );
console.log(newarray);

console.log(`Step : 5.find number between 20-50 and log on console`);
newarray=arrayNumbers.filter((element)=>{
   if(element <= 50 && element >= 20){
      return element;
   }
} );
console.log(newarray);