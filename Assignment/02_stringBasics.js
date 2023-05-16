var myString="   Hey you are doing good, keep it up   ";
function stringHandsOn()
{
    console.log(`1. Print the string as it is on console.`);
    console.log(myString);
    console.log(" ");

    var totalLength=myString.length;
    console.log(`2. Calculate length of the String.`);
    console.log(`Length: ${totalLength}`);
    console.log("");

    var trimeString=myString.trim();
    var afterTrim=trimeString.length;
    console.log(`3. Remove the leading and trailing extra spaces and log string on console with it’s length.`);
    console.log(`Length after removeing leading and trailing Space : "${trimeString.length}`);
    console.log("");

    console.log(`4. Print the total number extra spaces count that is removed in step 3.`);
    console.log(`The total number of extra spaces count is : ${totalLength-afterTrim}`);
    console.log("");

    console.log(`5. Print the first and last character on the same line after trim()`);
    var firstChar=trimeString.charAt(0);
    console.log(`First Character : ${firstChar}`);
    var lastChar=trimeString.charAt(trimeString.length-1);
    console.log(`First Character :${lastChar}`);
    console.log("");

    console.log(`6. Print the count of total words available in the string after step 3`);
    console.log(`String : ${trimeString}`);
    var splitResult=trimeString.split(" ");
    console.log(`No. of words in string:${splitResult.length}`);
    console.log("");
    
    console.log(`7. Print the index of word “good” from the given string`);
    console.log(splitResult);
    var indexOfGood=splitResult.indexOf("good,");
    console.log(`The index of word “good” : ${indexOfGood}`);
    console.log(" ");

    console.log(`8. Print the substring starting from index 22, using substring() and slice()`);
    var sliceResult = splitResult.slice(22);
    console.log(`Slice Result is: ${sliceResult}`);
    // var subStringResult = splitResult.substring(1,5);
    console.log(`Substring result is: GOT ERROR`);
    console.log(` `);

    console.log(`9. Check, is string ends with word “up” after step 3.`);
    var lastWord=trimeString.endsWith("up");
    console.log(`String :${trimeString}`);
    console.log(`End with "up" :${lastWord}`);
    console.log(` `);

    console.log(`10. Check is string starts with word “Hey” after trimming → i.e after step 3 output string value`);
    var firstWord=trimeString.startsWith("Hey");
    console.log(`String :${trimeString}`);
    console.log(`Start with "hey" :${firstWord}`);
    console.log(` `);
}   
stringHandsOn();