console.log("=============== Step : 1 ================");

class Vehicle{
    constructor(company,model,color,year,milage)
    {
        this.company=company;
        this.model=model;
        this.color=color;
        this.year=year;
        this.milage=milage;
    }
    showDetails()
    {
        console.log(`Company: ${this.company}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}, Milage: ${this.milage}`);
    }
}
const tata=new Vehicle("TATA","Altoz","red",2022,27);
const mg=new Vehicle("MG","Hector","Black",2022,28);
const kia=new Vehicle("KIA","Seltos","white",2022,26);
const mahindra=new Vehicle("Mahindra","XUV700","blue",2022,29);
const hyundai=new Vehicle("Hyundai","I20","grey",2022,26);

const array=[tata,mg,kia,mahindra,hyundai];
for (const element of array) {
    element.showDetails(); 
}

console.log("=============== Step:2,3 ================");

class College{
    constructor(Name,city,Univecity,noOfCourses)
    {
        this.Name=Name;
        this.city=city;
        this.Univecity=Univecity;
        this.noOfCourses=noOfCourses;
    }
}
const hvpm=new College("DCPE","Amravati","SGBAU",15);
const shivaji=new College("Shivaji","Nagpur","RTMNU",20);
const mit=new College("MIT","pune","SBFU",45);
const pote=new College("Pote","Amravati","SGBAU",40);

traverseObject=function (obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(hvpm);
console.log(`------------------`);
traverseObject(shivaji);
console.log(`------------------`);
traverseObject(mit);
console.log(`------------------`);
traverseObject(pote);

console.log("=============== Step:4 ================");

let num=11;
let count=0;
if(num==1)
{
    console.log(`${num} is Not Prime`);
}
else
{
    for (let index = 2; index < num; index++)
    {
        if(num%index==0)
        {
            count=count+1;
        }  
    }
    if(count<=1){
        console.log(`${num} is Prime Number`);
    }
    else{
        console.log(`${num} is Not Prime Number`);
    }
}
