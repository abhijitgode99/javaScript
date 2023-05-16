
function squareOfWordLength(len)
{
    var strlen=len.length;
    console.log(`   Length is :${strlen}`);
    square=strlen*strlen;
   return(square);
}
var string1="JavaScript";
console.log(`1) Passing the argument "${string1}"`);
console.log(`   Square is : ${ squareOfWordLength(string1)}`);

var string2="Google Chrome";
console.log(`   Passing the argument "${string2}"`);
console.log(`   Square is : ${ squareOfWordLength(string2)}`);

var string3="Developer Smart";
console.log(`   Passing the argument "${string3}"`);
console.log(`   Square is : ${ squareOfWordLength(string3)}`);

console.log(" ");

function arithOp()
{
    var myString="I am Angular Developer";
    console.log(`2) Given string is :${myString}`);
    var len=myString.length;
    var words=myString.split(" ");
    var wordsCount=words.length;
    var result= len/wordsCount;
    console.log("   2.1) Division  is :",result);
    var result= len*wordsCount;
    console.log("   2.2) Multiplication is :",result);
}
arithOp();