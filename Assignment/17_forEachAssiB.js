

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Financ",4700,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const array_employess=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`========= Step : 1. log the 'TCS' employee `);
array_employess.forEach(element => {
    if(element.emp_company=="TCS"){
        console.log(`Employee Name : ${element.emp_name}`);
        console.log(`Company Name : ${element.emp_company}`)
    }
});

console.log(`========= Step 2 : Salary is greater than or equal to 50000`);
array_employess.forEach(element => {
    if(element.emp_salary >= 50000){
        console.log(`Emp Name: ${element.emp_name}, sEmp Company: ${element.emp_company}, Emp Salary :  ${element.emp_salary}`);
    }
});
console.log(` `);

console.log(`========= Step 3 : Find the sum of all employee salary`);
let sum=0;
array_employess.forEach( (element)=> {
    sum=sum+element.emp_salary;
})
console.log(`sum : ${sum}`);
console.log(` `);

console.log(`========= Step 4 : find Average salary and log on console`);
let sum1=0;
array_employess.forEach( (element)=> {
    sum1=sum1+element.emp_salary;
})
let avr=sum/array_employess.length;
console.log(`Average Salary : ${avr}`);
console.log(` `);

console.log(`========= Step : 5. find the IT or HR department whose salary is greater than or equal 75000`);
array_employess.forEach(element => {
    if(element.emp_dept=="IT" || element.emp_dept=="IT" && element.emp_salary >= 75000){
        console.log(`Emp Id: ${element.emp_id}, Emp Name: ${element.emp_name}, Emp Dept: ${element.emp_dept} ,Emp Company: ${element.emp_company}, Emp Salary :  ${element.emp_salary}`);
    }
});