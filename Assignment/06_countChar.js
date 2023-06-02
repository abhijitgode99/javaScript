
var str1="I Am Learing JavaScript, The Language of Internet";
var str2="MY favourite movie is lAggAn";
countCharA=function(str){
    len=str.length;
    var count=0;
    for (let index = 0; index <= len; index++) {
        //console.log(` ${str[index]}`);
        if(str[index]=="a" || str[index]=="A"){
            count=count+1;
        }
    }
    console.log(`Total no. of a and A avilable in the string is ${count}`);
}
countCharA(str1);
countCharA(str2);