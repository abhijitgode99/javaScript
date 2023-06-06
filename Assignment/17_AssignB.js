

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

console.log(`Step 1 : Find all the employees working in 'TCS' and log only employee names and company name on console`);
for (const employee of array_employess) {
    if(employee.emp_company=="TCS"){
        console.log(`Employee Name : ${employee.emp_name}`);
        console.log(`Company Name : ${employee.emp_company}`);
    }
}
console.log(` `);

console.log(`Step 2 : Find the 'Finance' department employees, log only department and emploee name on console`);
for (const employee of array_employess) {
    if(employee.emp_dept=="Finance"){
        console.log(`Employee Depatment : ${employee.emp_dept}`);
        console.log(`Employee Name : ${employee.emp_name}`);
    }
}
console.log(` `);

console.log(`Step 3 : find the Employee Name start with "R" `);
for (const employee of array_employess) {
    if(employee.emp_name.startsWith("R")){
        console.log(`Emp Id: ${employee.emp_id}, Emp Name: ${employee.emp_name}, Emp Dept: ${employee.emp_dept} ,Emp Company: ${employee.emp_company}, Emp Salary :  ${employee.emp_salary}`);
    }
}
console.log(` `);

console.log(`Step 4 : find the Employee whose salaray greater than 75000`);
for (const employee of array_employess) {
    if(employee.emp_salary > 75000){
        console.log(`Emp Name: ${employee.emp_name}, sEmp Company: ${employee.emp_company}, Emp Salary :  ${employee.emp_salary}`);
    }
}
console.log(` `);

console.log(`Step 5 : find the Employee whose salaray greater than 55000 and Department is IT`);
for (const employee of array_employess) {
    if(employee.emp_salary >= 50000 && employee.emp_dept=="IT"){
        console.log(`Emp Id: ${employee.emp_id}, Emp Name: ${employee.emp_name}, Emp Dept: ${employee.emp_dept} ,Emp Company: ${employee.emp_company}, Emp Salary :  ${employee.emp_salary}`);
    }
}
console.log(` `);

console.log(`Step 6 : find the Employee from Company Infy`);
for (const employee of array_employess) {
    if(employee.emp_company=="Infy"){
        console.log(`Emp Id: ${employee.emp_id}, Emp Name: ${employee.emp_name}, Emp Dept: ${employee.emp_dept} ,Emp Company: ${employee.emp_company}, Emp Salary :  ${employee.emp_salary}`);
    }
}
console.log(` `);