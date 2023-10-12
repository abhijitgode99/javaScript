// Resverse String : 
// var n='gode';
// var newn='';
// for(var i=n.length-1;i>=0;i--){
//         newn+= n[i];
// }
// console.log(newn)

// no is palindrome or not

var num=121;
var before=num;
var rev=0;
var rem=0;
while(num>0){
        rem=num%10;
        rev=rev*10+rem;
        num=num/10;
}
console.log(rev);
if(before==rev){
        console.log('no. is palindrome');
}
else{
        console.log('no. is not palindrome');
}