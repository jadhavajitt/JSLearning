///const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
//For a given array fruits perform below operations as;
///1.log the first and last element on console
///2.Add element - papaya before the element "Banana"and then log array on console
///3.remove mango from the array
///4.Add element or interst an element "Pineapple at the last position"
///5.Insert an elemnt - "Dragon Fruit" before "Water melon"
///6.Replace an element "Orange" with "Kiwi"
///7.Log the elements starting from Index 1 to 4
///8.Only select last three elements and log on console : Use the length property

console.log("============================Assignment_Array_01=============================");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Elements before applying array: ${arraySeasonalFruits}`);
const removefirstAndLast = arraySeasonalFruits.slice(1,4);
console.log(`1)Elements after removing first and last fruits : ${removefirstAndLast}`);

const addPapayaBefBanana = arraySeasonalFruits.unshift("Papaya");
console.log(`2)Add Papaya before the element banana : ${arraySeasonalFruits}`);

const removeMango = arraySeasonalFruits.splice(4,1);
console.log(`3)Remove Mango from the element : ${arraySeasonalFruits}`);

const pineappleatlast = arraySeasonalFruits.push("Pineapple");
console.log(`4)Add Pineapple at last of the element : ${arraySeasonalFruits}`);

const dfBeforePa = arraySeasonalFruits.splice(5,0,"DragonFruit");
console.log(`5)Add Dragon Fruit before Pineapple: ${arraySeasonalFruits}`);

const replaceOrangrKiwi = arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(`6)Replace Orange with Kiwi: ${arraySeasonalFruits}`);

const indexOneToFour = arraySeasonalFruits.slice(1,4);
console.log(`7)Index from 1 to 4: ${indexOneToFour}`);

const accessLastThreeElements = arraySeasonalFruits.slice((arraySeasonalFruits.length-3),(arraySeasonalFruits.length));
console.log(`8)Last three elements usin length property: ${accessLastThreeElements}`);



