var myString="   Hey you are doing good, keep it up   ";
function stringHandsOn()
{
    console.log(myString);
    var totalLength=myString.length;
    console.log("Length: ",totalLength);
    var trimeString=myString.trim();
    var afterTrim=trimeString.length;
    console.log("Length after removeing leading and trailing Space : ",trimeString.length);
    console.log("The total number of extra spaces count is :",totalLength-afterTrim);
    var firstChar=trimeString.charAt(0);
    console.log("First Character : ",firstChar);
    var lastChar=trimeString.charAt(trimeString.length-1);
    console.log("First Character : ",lastChar);
}
stringHandsOn();