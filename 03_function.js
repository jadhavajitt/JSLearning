//function with no argument and no return value
function showFullName(){
    console.log("My full Name is: Ajit Jadhav");
} 
showFullName();

//function with argument and no return value
function showAge(Age){
    console.log("My age is: ",Age);
}
showAge(31);

//Function with no argument & return value
function fullname(){
    var name = "Ajit Jadhav";
    return name;
}
var fName = fullName();
console.log(fName);

//function with argument and return value
function sumOfNumbers(num1, num2, num3 ){
    var sum = num1 + num2 + num3;
    return sum;
}
var sumResult = sumOfNumbers(10, 45, 79);
console.log(sumResult);


