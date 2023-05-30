var myString="I am very good IT Developer";
stringLength=myString.length;
var count=0;
for(var i=0;i<=stringLength-1;i++)
{
    if(myString[i]=="a"|| myString[i]=="A" || myString[i]=="e" || myString[i]=="E" || myString[i]=="i" || myString[i]=="I" || myString[i]=="o" || myString[i]=="O" || myString[i]=="u" || myString[i]=="U")
    {
        
        var count=count+1;
    }
}
console.log(`1) Total no. of vovels is ${count}`);

var sumOfCube = function (num){
for (let index = 1; index <=num; index++) {
    var sum=index*index*index;
}
console.log(`2) Sum of cube is ${sum}`);
}
sumOfCube(5);

string1="Hard work slways pays back";
string2="Soon I will be Angular IT Champ";
function offPositionedChars(str) {
    strLength=str.length;
    console.log(`Given String : ${str}`);
    for (let index = 0; index <=strLength-1; index++) {
        if(str[index]==" "){
        }
        else{
            if(index%2!=0){
        
                console.log(`${str[index]}`);
            }
        }
    }
}
console.log(`3)`);
offPositionedChars(string1);
offPositionedChars(string2);