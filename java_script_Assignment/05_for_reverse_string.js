// for reversing the whole string
var reverseStrng = function (str) {

    var reverse = "";//wo
    for (let index =str.length-1; index >=0; index--){
        var charAt = str.charAt(index);  
        reverse = reverse + charAt;//"w"+"o" ==> "wo" 
    }

    return reverse;
}
var result=reverseStrng("Do it anyhow")
console.log(`Reverse String is : ${result}`);

// reverse the last word of string
var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);


// for printing only "it " word from
 str="Do it anyhow";
 var result="";
for (let index = 0; index < str.length; index++) {  ///// for it
     var  char=str.charAt(index)
    if(char=="i" || char=="t")
    {
        result= result + char;      
    }
}
console.log(result);

// for printing only first word "do" from the sting
str="Do it anyhow";
 var result="";
for (let index = 0; index < str.length; index++) {  ///// for it
     var  char=str.charAt(index)
    if(char==" ")
    {
        break;  
    }
    result=result + char;
}
console.log(result);


// for printing string as it is
var char="";
var str = "I am Angular champ";
for (let index = 0; index <=str.length; index++) {
     var result = str.charAt(index);
     char = char + result;
    
}
console.log( `my string is : ${char}`);

// for calculating total number of spaces present in string                                                                                                                         
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count + 1;
    }
}
console.log("Total number of spaces is: ", count);

 // FOR ovels present in srting
var str = "I am Angular  champ";
var result = "";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == "a" || char=="e" || char=="i"|| char== "o" ||char=="u" || char=="A" || char == "E"|| char=="I" || char=="O" || char=="U") 
    {
        result = result + char;
    }
}
console.log("Total ovwels present in string are: ", result);