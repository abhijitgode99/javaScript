// // 11
// // 2



// Ckheck number is primt or not my logic
function primeNum(num) {
    let isPrime = true;
    for (let index = 2; index < num; index++) {
        
      if (num % index == 0) {
        isPrime = false;
        console.log(`Not a prime number as it is divisible by ${index}`);
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is prime number`);
    } else {
      console.log(`Is not prime number ${num}`);
    }
  }

  primeNum(4);
  primeNum(5);
  primeNum(9);
  primeNum(11);
  console.log(` `);
console.log(``);

 function primeornot(no){
  let count=1;
  let num=no;
  
  if(num==0 && num==1){
    console.log(`${num} is not prime`)
  }
  else{
    for(i=1;i<=num/2;i++){
      if(num % i == 0){
        count=count+1;
      }
    }
  }
  if(count==2){
    console.log(`${num} is prime`)
    }
  else{
    console.log(`${num} is not prime`)
  }
}
primeornot(25)
primeornot(23)
console.log(` `);
console.log(``);

// print the series of prime number
console.log(`print the series of prime number`);
function primeornot(no) {
  for (let i = 2; i <= no; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(`Prime number: ${i}`);
    }
  }
}
primeornot(5);
