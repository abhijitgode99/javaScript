console.log(`=============Using Logic=============`);
const arrayNum=[11,3,4,11,4,7,3];
console.log(`Before Removing Duplicate element: ${arrayNum} `);
for (let i = 0; i < arrayNum.length; i++) 
{
    let num=arrayNum[i];
    for (let j = i+1; j < arrayNum.length; j++)
    {
        if(num==arrayNum[j])
        {
            arrayNum.splice(j,1);
        }
    }
}
console.log(`After Removing Duplicate element: ${arrayNum}`);
