
isPalindrome=function(arg){
    let value=arg;
    let num1=value[0];
    let num2=value[value.length-1]
    let str="pal";
    for (let i = 0; i < value.length-1; i++) {
        if(num1==num2){
            num1=value[0+i];
            num2=value[value.length-1-i];
            if(0+i==value.length-1-i){
                break;
            }
        }else{
            str="notPal";
        }
    }
    if (str=="pal") {
        console.log(`Given string ${value} is Palindrome`);
    } else {
        console.log(`Given string ${value} is Not Palindrome`);
    }
}
isPalindrome("12321");
isPalindrome("Abhi");