const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`============= Step : 1 =============`);
console.log(`First Element of an Array :  ${arrayFruits[0]}`);
console.log(`Last Element of an Array : ${arrayFruits[arrayFruits.length-1]}`);
console.log(` `);

console.log(`============= Step : 2 (add papaya before Banana) =============`);
arrayFruits[0]="Papaya";
console.log(arrayFruits);
console.log(` `);

console.log(`============= Step : 3 (Remove 'mango' form the araay) =============`);
arrayFruits.splice(3,1);
console.log(arrayFruits);
console.log(` `);

console.log(`============= Step : 4 (add pinapple at the last position) =============`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(` `);

console.log(`============= Step : 5 (Insert Dragon Fruit Before Water Melon) =============`);
arrayFruits.splice(3,0,"Dragon Fruit")
console.log(arrayFruits);
console.log(` `);

console.log(`============= Step : 6 (Replace Orange with Kiwi) =============`);
arrayFruits.splice(1,1,"Kiwi")
console.log(arrayFruits);
console.log(` `);

console.log(`============= Step : 7 (Log the element form the index 1 to 4) =============`);
const sel=arrayFruits.slice(1,5);
console.log(sel);
console.log(` `);

console.log(`============= Step : 8 (Only Select last 3 element , Use length Property) =============`);
const select=arrayFruits.slice(arrayFruits.length-3);
console.log(select);