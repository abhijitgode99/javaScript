
// const array=[4,56,8,7,1,6,94,100]

// for (let i = 0; i < array.length; i++) {
//     let num=array[i];
//     for (let j = i+1; j < array.length; j++) {
//         const element = array[j];
//         if(num > array[j]){
//             let temp=num;
//             num = array[j];
//             array[j]=temp;
//         }
//     }
// }
// console.log(array);

const arrayNames = ["Shyam", "Anil", "Shubhu", "Jenny", "Bittu", "Kittuu"];

arrayNames.sort(); // Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse(); // Reverse array that is in ascending order
console.log(arrayNames);

const array = [23, 9, 204, 4,  0, 66, 106 ];
array.sort( (n1, n2) => {
   return n1 > n2 ? 1 : -1 ;
} );
console.log(array);
array.reverse()
console.log(array);