let array=[20,10,25,41,60,96,29];

for(i=0;i<=array.length-2;i++){
    for(j=i+1;j<=array.length-1;j++){
        if(array[j]<array[i]){
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
console.log(`Second Largest Element ${array[array.length-2]}`);
