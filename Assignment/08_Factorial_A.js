

factorialOfNum=function(num){
    let factorial = 1; 
    if(num==0 || num==undefined || num==NaN){
        factorial=`Invalid Input`;
    }
    else{
        for (let index = num; index >= 1; index--) { 
            factorial = factorial * index; 
        }
    }
    return factorial;
}
console.log(`factorial of No.5 is : ${factorialOfNum(5)}`);
console.log(`factorial of No.3 is : ${factorialOfNum(3)}`);
console.log(`factorial of No."null" is : ${factorialOfNum(null)}`);
console.log(`factorial of No.8 is : ${factorialOfNum(8)}`);
console.log(`factorial of No."undefined" : ${factorialOfNum(undefined)}`);
console.log(`factorial of No.9 is : ${factorialOfNum(9)}`);
console.log(`factorial of No.0 is : ${factorialOfNum(0)}`);