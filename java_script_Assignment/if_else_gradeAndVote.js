function voteEligibility(age){
    if (age >= 21 && age<=120){
        console.log(`The person with age ${age} is eligible for Voting`);
    }if (age < 21 && age > 0){
        console.log(`The person with age ${age} is not eligible for Voting`);
    }if (age <= 0 || age > 120 || age == undefined || age == null){
        console.log(`The person with age ${age} has enter invalid data`);
    }

    }
voteEligibility(45);
voteEligibility(17);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

// Design a grade system

function gradeCalculation (marks){
    if (marks >= 90 && marks<=100 && typeof marks=="number"){
        console.log(`Funtastic Marks: ${marks} Your grade is A+`);
    }if (marks >= 75 && marks < 90 && (typeof marks=="number")){
        console.log(`Excellent Marks ${marks} Your grade is A`);
    }if (marks >= 50 && marks < 75 && (typeof marks=="number")){
        console.log(`Good Marks ${marks} Your grade is B`);
    }if (marks >= 35 && marks < 50 && (typeof marks=="number")){
        console.log(`Marks is ${marks} Your grade is C, Need Improvement`);
    }if (marks <= 0 || marks > 100 || typeof marks != "number"){
        console.log(`Please provide valid marks`);
    }            
}

gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation("91")
gradeCalculation("Eighty")
gradeCalculation(NaN)
gradeCalculation(null)