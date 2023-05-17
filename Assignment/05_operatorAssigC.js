var elgiblity=function(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore >= 70 || hscScore >=80 || sscScore >= 90;
    result= result==true? `Congrats, ${candidateName} you are eligible for TCS interview` : `Unfortunately you are not eligible for TCS interview`;
    console.log(result);
}
elgiblity(80,86,90,"Abhijit");
elgiblity(70,65,55,"Hussain");
elgiblity(60,79,88,"Ratan");