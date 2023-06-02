const arrayNums=[20,3,4,56,90,400,49];
const ShallowCloneArray=arrayNums;
ShallowCloneArray.push(55,66);
console.log("=========== Step : 1 (Shallow Clone)=============");
console.log(`arrayNums : ${arrayNums}`);
console.log(`ShallowCloneArray : ${ShallowCloneArray}`);

console.log(" ");
console.log("=========== Step : 2 (Deep Clone)=============");
const deepCloneArray=[...arrayNums];
arrayNums.push(10,25);
console.log(`arrayNums : ${arrayNums}`);
console.log(`deepCloneArray : ${deepCloneArray}`);

console.log(" ");
console.log("=========== Step : 3 (Merge Array using Spread Operator =============");
const arrayEven=[2,30,14,8];
const mergeSpreadArray=[...arrayNums,...arrayEven]
console.log(`arrayNums : ${arrayNums}`);
console.log(`arrayEven : ${arrayEven}`);
console.log(`mergeSpreadArray : ${mergeSpreadArray}`);