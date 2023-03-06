//print no from 1 to 10
//initialization 1
//update expression +1
//condition <=10
for (let index = 1; index <= 10 ; index=index+1) {
    console.log(index);    
}

//reduce number
for (let index = 10; index >= 0 ; index=index-1) {
    console.log(index);    
}

//infinite loop
//for (let index = 1; index <= 10;) {
//    console.log(index);    
//}

//index=index+1 ===> index++ (increament operator)
//index=index-1 ===> index-- (decreament operator)

var index = 10;
var x = index+1;
console.log(index , x);

var index = 10;
var x = index++;
console.log(index , x);

var index = 10;
var x = ++index;
console.log(index , x);