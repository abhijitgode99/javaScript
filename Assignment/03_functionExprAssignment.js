
var square= function(val){
    return(`1. square of ${val} is ${val*val}`);
 }
var result= square(10)
console.log(result);

result=typeof square;
console.log(`2. Type of variable is : ${result}`);

var areaOfRect= function(length,width){
    return(`3. Area of Rectangle is ${length*width}`);
 }
var result= areaOfRect(499,917);
console.log(result);

var swapValues=function(val1,val2){
    console.log(`4.Before swaping Value1=${val1} Value2=${val2}`);
    var temp=val1;
    val1=val2;
    val2=temp;
    return(`  After swaping Value1=${val1} Value2=${val2}`);
}
swap=swapValues("Virat","Anushka");
console.log(swap);
swap=swapValues(1000,2000);
console.log(swap);

var operation=function(val){
    var totalChar=val.length;
    console.log(`5)  A. The total character available in the string is : ${totalChar}`);
    var charIndex=val.charAt(6);
    console.log(`    B. The character at Index 6 is : ${charIndex} **space is there`);
    var charIndex=val.charAt(11);
    console.log(`    C. The character at Index 11 is : ${charIndex} **space is there`);
    var lastChar=val.charAt(totalChar-1);
    console.log(`    D. The last character using length property is : ${lastChar} `);
    var firstChar=val.charAt(0);
    console.log(`    E. The first character from the string is : ${firstChar} `);
    var splitString=val.split(" ");
    var lengthOfStr=splitString.length;
    console.log(`    F. The total number of words in the giaven string is :${lengthOfStr} `);
    var sqr=lengthOfStr*lengthOfStr;
    console.log(`       Square is : ${sqr} `);
}
var myString="JS the most popular language of internet";
operation(myString);