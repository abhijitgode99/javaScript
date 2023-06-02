
console.log(`Fabonicci Series :-`);
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for (let index = 0; index <= 8; index++) 
{
    let next=num1+num2;
    num1=num2;
    num2=next;
    console.log(next);
}