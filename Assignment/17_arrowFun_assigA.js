

console.log(`step 1 : Arrow function with no argument no return`);
let arrowVar = () => {
    console.log(`Good Morning, Today is Monday`);
}
arrowVar();
console.log(``);

console.log(`step 2 : Arrow function with argument no return`);
let arrowVar1= (n1,n2,n3=1) => {
    let mul=n1*n2*n3;
    console.log(`Multiplication is : ${mul}`);
}
arrowVar1(5,5,2);
arrowVar1(10,4);
console.log(` `);

console.log(`step 3 : Arrow function with argument with return`);
let arrowVar2= (n1,n2,n3,n4,n5) => {
    let add=n1+n2+n3+n4+n5;
    console.log(`Addition is : ${add}`);
}
arrowVar2(100,100,200,349,756);
arrowVar2(`I am `,`learning `,`ES6 `,`features `,`in depth `)