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
console.log("=========== Step : 3 (Merge Array using Spread Operator) =============");
const arrayEven=[2,30,14,8];
const mergeSpreadArray=[...arrayNums,...arrayEven]
console.log(`arrayNums : ${arrayNums}`);
console.log(`arrayEven : ${arrayEven}`);
console.log(`mergeSpreadArray : ${mergeSpreadArray}`);


//console.log("=========== Step : 4 =============");
const employee_info = {
    emp_id: 27,
    emp_name: "john Doe",
    salary:{
        july_month: "40,0000INR",
        aug: "50,0000INR",
        jun_month: "65,0000INR",
    },
    address: {
        locality:{
            colony:"OM Vrinadavan Society",
            street:"Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country:"india"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 320", "+91- 9096 5678 77"]
}


console.log(" ");
console.log("=========== Step : 5.(a) =============");
console.log(`Address`);
console.log(`Locality : ${employee_info.address.locality.colony}`);
console.log(`City : ${employee_info.address.city}`);
console.log(`State : ${employee_info.address.state}`);
console.log(`Country : ${employee_info.address.country}`);
console.log("=========== Step : 5.(b) =============");
console.log(`Mobile Number : ${employee_info.mobiles}`);

console.log(` `);
console.log("=========== Step : 6 =============");
const deepClonemployee_info = JSON.parse(JSON.stringify(employee_info));
deepClonemployee_info.salary.july_month="80,000INR";

employee_info.address.country="United Kingdom";

console.log(`a. Original Object July_moth: ${employee_info.salary.july_month}`);
console.log(`   Cloned Object July_moth: ${deepClonemployee_info.salary.july_month}`);
console.log(` `);
console.log(`b. Original Object Country: ${employee_info.address.country}`);
console.log(`   Cloned Object Country: ${deepClonemployee_info.address.country}`);