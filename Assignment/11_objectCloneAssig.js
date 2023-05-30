let bankSbi={
    bankName: "SBI",
    accountNo: " 123456789",
    ifsc: "sbi12345",
    interestRate: "10.10%",
};
let bankLocation={
    street: "Umred Road",
    city: "Nagpur",
    pin: "440009"
};

Object.assign(bankSbi,bankLocation);
console.log(`=========== Step : 1,2,3(Clone) =============`);
console.log(`Bank Name : ${bankSbi.bankName}`);
console.log(`Accoun No.: ${bankSbi.accountNo}`);
console.log(`IFSC : ${bankSbi.ifsc}`);
console.log(`Interest Rate : ${bankSbi.interestRate}`);
console.log(`Street : ${bankSbi.street}`);
console.log(`City : ${bankSbi.city}`);
console.log(`PIN : ${bankSbi.pin}`);
console.log(" ");
// console.table(bankSbi);
// console.table(bankLocation);

let rateOfInterest={
    homeLoneInterest:"5%",
    personalLoanInterest:"7%",
    duelInterest:"6%"
};
let sbiDetails=Object.assign({},rateOfInterest,bankSbi);

console.log(`=========== Step : 4,5(Merge)=============`);
console.log(`Bank Name : ${sbiDetails.bankName}`);
console.log(`Accoun No.: ${sbiDetails.accountNo}`);
console.log(`IFSC : ${sbiDetails.ifsc}`);
console.log(`Interest Rate : ${sbiDetails.interestRate}`);
console.log(`Street : ${sbiDetails.street}`);
console.log(`City : ${sbiDetails.city}`);
console.log(`PIN : ${sbiDetails.pin}`);
console.log(`Home Load Interest : ${sbiDetails.homeLoneInterest}`);
console.log(`Personal Loan Interest : ${sbiDetails.personalLoanInterest}`);
console.log(`Duel Interest : ${sbiDetails.duelInterest}`);
console.log(" ");

console.log(`=========== Step : 6(Travers) =============`);

for (const key in sbiDetails) { // key = "Bank Name"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}: ${value}`);
    }
}