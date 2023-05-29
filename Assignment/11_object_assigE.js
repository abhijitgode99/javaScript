
const sbiBank={
    bankName: "SBI",
    location: "Nandanvan",
    accountNo: " 123456789",
    ifsc: "sbi12345",
    interestRate: "10.10%",
    showDetails : function()
        {
            console.log(`Bank Name:${this.bankName} Location :${this.location} Account No. :${this.accountNo} IFSC code :${this.ifsc} Interest Rate : ${this.interestRate}`);
        }
};
sbiBank.showDetails();
const axisBank={
    bankName: "Axis Bank",
    location: "Wardhman Nagar",
    accountNo: " 987456123",
    ifsc: "axis56478",
    interestRate: "7.10%",
    showDetails : function()
        {
            console.log(`Bank Name:${this.bankName} Location :${this.location} Account No. :${this.accountNo} IFSC code :${this.ifsc} Interest Rate : ${this.interestRate}`);
        }
};
axisBank.showDetails();
const hdfcBank={
    bankName: "HDFC Bank",
    location: "Medical Square",
    accountNo: " 58941357",
    ifsc: "hdfc56987",
    interestRate: "7.25%",
    showDetails : function()
        {
            console.log(`Bank Name:${this.bankName} Location :${this.location} Account No. :${this.accountNo} IFSC code :${this.ifsc} Interest Rate : ${this.interestRate}`);
        }
};
hdfcBank.showDetails();
const yesBank={
    bankName: "Yes Bank",
    location: "Manewada",
    accountNo: " 563214889",
    ifsc: "yes12359",
    interestRate: "6.25%",
    showDetails : function()
        {
            console.log(`Bank Name:${this.bankName} Location :${this.location} Account No. :${this.accountNo} IFSC code :${this.ifsc} Interest Rate : ${this.interestRate}`);
        }
};
yesBank.showDetails();