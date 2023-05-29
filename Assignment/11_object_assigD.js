
let professor={
    name:"vishal",
    age:"35",
    gender:"male",
    college:"hvpm",
    subject:"computer science",
    degree : {
        engineering:"CSE",
        PHD:"adv Computing",
        diploma:"cyber security"
    },
    certificate:["Hacker Rank Participation", "IFE course", "Adv Programming"],
    value :function(){
        let degrees=`engineering: ${this.degree.engineering}, PHD: ${this.degree.PHD}, Diploma : ${this.degree.diploma}`;
        return degrees;
    }
};
console.log(`1. Think of all the properties that you could add ( Add minimum 5 properties)`);
console.log(`1.Name: ${professor.name}`);
console.log(`2.age: ${professor.age}`);
console.log(`3.gender: ${professor.gender}`);
console.log(`4.college: ${professor.college}`);
console.log(`5.subject: ${professor.subject}`);
console.log(" ");

console.log(`2. Also include nested object ‘degrees’ like engineering: ‘CSC’, PHD: ‘Adv Computing’
and few more.`);
console.log(professor.degree);
console.log(" ");

console.log(`3. Also add one array → ‘certificates’ with his certificates like ‘Hacker Rank
Participation’, ‘Certificate in IFE course’, ‘Certificate in Adv Programming’`);
console.log(professor.certificate);
console.log(" ");

console.log(`4. Add function as a value which should concat all degrees in step 2, please return as
string and log on console with - Teacher degrees are total degrees are: `);
let show=professor.value();
console.log(`total degrees are ==>${show}`);
console.log(" ");

console.log(`5. Try to add new property like totalExperience: “14 years” and log on console`);
professor.totalExperience="14 years";
console.log(`total Experience is : ${professor.totalExperience}`);
console.log(" ");

console.log(`6. Modify any existing property and log complete object on console`);
professor.age=45;
console.log(professor);
console.log(" ");

console.log(`7. Add one new certificate → “Oracle Certified” at the end of array → certificates`);
professor.certificate.push("Oracle Cerificate");
console.log(professor.certificate);
console.log(" ");

console.log(`8. Log the last element of the array certificates.`);
let n=professor.certificate.length;
console.log(professor.certificate[n-1]);