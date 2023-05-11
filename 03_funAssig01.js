function display()
{
    console.log("You are inside display function");
}
display();

function show()
{
    console.log("you are inside the function show() having no argument no return");
}
show();
//==============================================================
console.log("");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("First Name=",firstName);
    console.log("Last Name=",lastName);
    console.log("College Name=",collegeName);
}
personalDetails("Abhijeet","gode","Prerna College");
// =============================================================
console.log("");
function swapValuesDude(val1,val2)
{
    console.log("Before  Swapping : ",val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After Swapping : ",val1,val2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
// =============================================================
console.log("");
function addThreeValues(val1,val2,val3)
{
    var result=val1+val2+val3
    console.log("Result =",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ","Good ","Morning");









