


function division(num1, num2=1){ // let num1 = 7, let num2;
    if(num2==0){
        num2=1;
    } 
    console.log(num1/num2);
}
division(10, 5);
division(67, 0);
division(7);

console.log(`============ Object Destructuring =============`);
const student = {
    name: "Stew",
    age: 57,
    country: "US",
    pin: 223312,
    rollNo: 111,
    college: "COEP Pune",
    marks: "90%",
    degree: "BE CSE"
}
// const rollNo = student.rollNo;
// const name = student.name;
// const college = student.college;
// const degree = student.degree;
// const country = student.country;

const {rollNo,name, college, degree, country } = student;

const { pin, age, isMarried=false } = student;  // const pin = student.pin;
console.log(pin, age, isMarried);

const arr = [11, 22, 33];
const [element1, element2, num1, num2=0] = arr;      //object Destructuring
console.log(element1, element2, num1, num2);

// const aarayNum=[11,3,4,11,4,7,3];
// for (let i = 0; i < aarayNum.length; i++) {
//     const element = aarayNum[index];
//     for (let j = i+1; j < aarayNum.length; j++) {
//         if(element==aarayNum[j])
//         {
//             arrayNums.pop[j];
//         }
//     }
// }
// console.log(arrayNum);