// ispalindrome=function(arg){
//     let value=arg;
//     let num1=value[0];
//     let num2=value[value.length-1]
//     let ispal = true;
//     length=value.length-1
//     for(i=0;i<=length;i++){
//              if(num1==num2){
//                 num1=value[0+i];
//                 num2=value[0-length-1];      
//              if(0+i==0-length-1)
//                 break;
//             }
//             else
//             {
//                 ispal=false
//             }
//     if(ispal){
//         console.log(`${val} is pal`);
//     }
//     else{
//         console.log(`${val} is not pal`);
//     }
// }
// }

// ispalindrome(121)


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
        }else
        {
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