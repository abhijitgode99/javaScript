var eligiblity=function(gradScore,hscScore,sscScore,candidateName){
    if(gradScore>=70 && hscScore>=80 && sscScore>=90)
    {
        console.log(`Congrats ${candidateName} you are eligible for TCS iterview.`);
    }
    else{
        console.log(`you are not eligible for interview`);
    }
}
eligiblity(80,86,90,"Abhijeet");
eligiblity(70,65,55,"Kunal");
eligiblity(60,79,88,"Raj");