factorial=function(no){
let fact=1;
let num=no;
for(i=num;i>=1;i--){
    fact=fact*i;
}
console.log(`factorial of ${num} is ${fact}`);
}

factorial(3)

