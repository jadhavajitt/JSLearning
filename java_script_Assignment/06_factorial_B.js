function factorialOfWordsCount(str)
  {
     var factorial =1;

        if(typeof str !=="string")
         {
           console.log(`This is invalid data type: "${str}"`);
        }
        else 
        {
         let spl = str.split(" ");
         let  total=spl.length;
        for (let index =total; index >=1; index--)
        {
           factorial = factorial * index; 
        }
         console.log(`The word in " ${str}" is  "${total}" And its factorial is *${factorial}*`);
    }
}
factorialOfWordsCount("Revision is the mother of sucess")
factorialOfWordsCount(undefined)
factorialOfWordsCount("We never fail, we always learn")
factorialOfWordsCount(null)
factorialOfWordsCount("")
factorialOfWordsCount("Ajit Jadhav")
factorialOfWordsCount(NaN)