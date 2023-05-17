var greaterNumber= function (val1,val2){
    console.log(`num1 : ${val1}`);
    console.log(`num2 : ${val2}`);
    result=val1>=val2? `${val1} is greater`: `${val2} is greater`;
    console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log( " ");

var isEvenOrOddNum=function(val1){
    var result=val1%2==0;
    return(result);
}
num1=29;
console.log(`Passing argumnet is : ${num1}`);
var value=isEvenOrOddNum(num1);
var output=value==true? `Number is Even`: `Number is Odd`;
console.log(output);
num2=29;
console.log(`Passing argumnet is : ${num2}`);
var value=isEvenOrOddNum(num2);
var output=value==true? `Number is Even`: `Number is Odd`;
console.log(output);
num3=0;
console.log(`Passing argumnet is : ${num3}`);
var value=isEvenOrOddNum(num3);
var output=value==true? `Number is Even`: `Number is Odd`;
console.log(output);
num4=101;
console.log(`Passing argumnet is : ${num4}`);
var value=isEvenOrOddNum(num4);
var output=value==true? `Number is Even`: `Number is Odd`;
console.log(output);
console.log(" ");

var wordLength=function(val){
    len=val.length;
    result=len%2==0? `Word ${val} - Even Length` : `word ${val} - Odd Length`;
    return(result);
}
console.log(`${wordLength("javaScript")}`);
console.log(`${wordLength("developer")}`);
console.log(`${wordLength("Google")}`);
