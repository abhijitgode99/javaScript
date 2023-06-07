


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

const arrayEmps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
// let newArray=[];
console.log(`===== Step 1 : Find all employee from 'Wipro' company`);
arrayEmps.filter((element)=>{
    if(element.emp_company=="Wipro"){
        console.log(`Emp Name: ${element.emp_name}, Emp Company: ${element.emp_company}`);
    }
});
console.log(` `);
console.log(`=====Step 2 : Find all employee from 'IT' and 'HR' Depatment`);
arrayEmps.filter((element)=>{
    if(element.emp_dept=="IT" || element.emp_dept=="HR"){
        console.log(`Emp Id: ${element.emp_id}, Emp Name: ${element.emp_name}, Emp Dept: ${element.emp_dept} ,Emp Company: ${element.emp_company}, Emp Salary :  ${element.emp_salary}`);
    }
});
console.log(` `);
console.log(`===== Step 3 : Find all employee whose emp id's are greater than 50`);
arrayEmps.filter((element)=>{
    if(element.emp_id > 50){
        console.log(`Emp Id: ${element.emp_id}, Emp Name: ${element.emp_name}, Emp Dept: ${element.emp_dept} ,Emp Company: ${element.emp_company}, Emp Salary :  ${element.emp_salary}`);
    }
});
console.log(` `);
console.log(`===== Step 4 : Find all employee whose names strat with letter 'A' or 'V' or 'M'`);
arrayEmps.filter((element)=>{
    if(element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")){
        console.log(`Emp Id: ${element.emp_id}, Emp Name: ${element.emp_name}, Emp Dept: ${element.emp_dept} ,Emp Company: ${element.emp_company}, Emp Salary :  ${element.emp_salary}`);
    }
});
console.log(` `);
console.log(`===== Step 5 : Find Average salary of the employee for all the department (using filter and reduce method)`);
const newArray = []
arrayEmps.filter((element)=>{
   newArray.push(element.emp_salary)
});
let sum=newArray.reduce((sumcount,value)=>{
    return sumcount + value;
});
console.log(`Average salary of employee : ${sum/newArray.length}`)
console.log(` `);
console.log(`===== Step 5 : Find Average salary for 'IT' department (using filter and reduce method)`);
const newArray1 = []
arrayEmps.filter((element)=>{
    if (element.emp_dept=="IT") {
        newArray1.push(element.emp_salary);
    }
});
let sum1=newArray1.reduce((sumcount,value)=>{
    return sumcount + value;
});
console.log(`Average salary of employee : ${sum1/newArray1.length}`)