let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

let student = {

}
// student = person; // Shallow clone: two refference variable ponting to the same object

Object.assign(student, person);

student.age = 100;
person.age = 90;

console.table(person);
console.table(student);