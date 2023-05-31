console.log("=============== 1 ================");

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

console.log("=============== 2 ================");

class Vehicle{
    constructor(Name,city,Univecity,noOfCourses)
    {
        this.Name=Name;
        this.city=city;
        this.Univecity=Univecity;
        this.noOfCourses=noOfCourses;
    }
    showDetails()
    {
        console.log(`Name: ${this.Name}, city: ${this.city}, Univecity: ${this.Univecity}, No. Of Courses: ${this.noOfCourses}`);
    }
}
const hvpm=new Vehicle("DCPE","Amravati","SGBAU",15);
const shivaji=new Vehicle("Shivaji","Nagpur","RTMNU",20);
const mit=new Vehicle("MIT","pune","SBFU",45);
const pote=new Vehicle("Pote","Amravati","SGBAU",40);