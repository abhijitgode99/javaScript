//Implicit Conversion to string
//numeric string used with + gives string type
let reuslt;

result = `3` + 2;
console.log(result);  //32

result = `3` + true;
console.log(result);  //3true

result = `3` + undefined;
console.log(result);  //3undefined

result = `3` + null;
console.log(result);  //3null

//Implicit boolean conversion to Number
//if boolean is used, true is 1, false is 0

result = '4' - true;  //4-1
console.log(result);  //3

result = 4 + true;  //4+1
console.log(result);  //3

result = 4 + false; 
console.log(result);  //4

//Undefined used with number,boolean or null given NaN
//Arithmatic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(result);  //Nan

result = 4 - undefined;
console.log(result);  //Nan

result = true + undefined;
console.log(result);  //Nan

result = null + undefined;
console.log(result);  //Nan

//Explicit conversion : Convert number strings and boolean values to numbers,
//In that case we can use Number();

//string to number
result=Number('324');
console.log(result);  //324

result=Number('324e-1');
console.log(result);  //324

//boolean to number 
result=Number(true);
console.log(result);  //1

result=Number(false);
console.log(result);  //0

//Explicit conversion: Invalid string to number return NaN
//If a string is an invalid number, the result will be Nan, For example.

result = Number('hello');
console.log(result); //NaN

result = Number(undefined);
console.log(result); //NaN

result = Number(NaN);
console.log(result); //NaN
