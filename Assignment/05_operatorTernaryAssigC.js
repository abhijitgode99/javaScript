function maleMarriageEligibility(gender,age,boyName)
{
    var result=age>=21? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are Not eligible for Marriage`;
    return(result);
}
console.log(`${maleMarriageEligibility("Male",25,"Billgates")}`);
console.log(`${maleMarriageEligibility("Male",17,"Stew Jobs")}`);
console.log(" ");
function femaleMarriageEligibility(gender,age,girlName)
{
    var result=age>=18? `Hey ${girlName} you are eligible for Marriage` : `Hey ${girlName} you are Not eligible for Marriage`;
    return(result);
}
console.log(`${femaleMarriageEligibility("FeMale",16,"Jenifer")}`);
console.log(`${femaleMarriageEligibility("FeMale",27,"Malinda Gates")}`);