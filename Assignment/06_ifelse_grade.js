var voteEligibility=function(age){
    if(age== 0 || age==undefined || age==null || age>=120 || age<=0)    {
        console.log(`age :${age} ,Invalid data`);
    }
    else{
        if (age<18) 
        {
            console.log(`Your age is ${age}.you are not eligible for voting`); 
        } 
        else 
        {
            console.log(`Your age is ${age}.you are  eligible for voting`);
        }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-7);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);