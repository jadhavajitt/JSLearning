let arrayOfNumbers = [ 0, 2, 4, 5, 8, 4, 0, 8];
console.log(arrayOfNumbers);
// console.table(arrayOfNumbers);
const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);

const is9available = arrayOfNumbers.includes(9);
console.log(`Index of 8 element is: ${is9available} `);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumber[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

arrayOfNumber[3] = 35;
console.log(arrayOfNumber);

arrayOfNumber[1] = 50;
console.log(arrayOfNumber);

var arrayOfNumberss = [ 10, 20, 25, 15, 30, 5];
console.log("==== Adding element in the last using push() === ");
arrayOfNumberss.push(40);
console.log(arrayOfNumberss);
console.log("==== Adding element in the first using unshift() === ");
arrayOfNumberss.unshift(5);
console.log(arrayOfNumberss);

var arrayOfNumbersss = [ 10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbersss);
console.log("==== Removing last element using pop() === ");
arrayOfNumbersss.pop();
console.log(arrayOfNumbers);
console.log("==== Removing first element using shift() === ");
arrayOfNumbersss.shift();
console.log(arrayOfNumbersss);

var arrayOfNumb = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumb.slice(3);
console.log(arrayFromIndex3);

console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumb.slice(2, 5);
console.log(subArray);


console.log("============================");
var arrayOfN = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfN.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfN);

var arrayOfN = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfN.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfN);

console.log("===========splice() to insert one element without replacing existing element===============");
var arrayOfNumberr = [10, 20, 30, 40, 50 ,60 ,70]
arrayOfNumberr.splice(2, 0, 22);
console.log(arrayOfNumberr);

console.log("===========splice() to insert one element without replacing existing element===============");
var arrayOfNumberr = [10, 20, 30, 40, 50 ,60 ,70]
/// 1, 2, 3
arrayOfNumberr.splice(2, 0, 1, 2, 3);
console.log(arrayOfNumberr);

