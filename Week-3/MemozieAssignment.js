function memoize(fn){
    const cache = new Map();
    var key=0;

    return function (...args){
      
        for (let index = 0; index < args.length; index++) {
           key= args[index];
         
          if(cache.has(key)){
          console.log("Previous value "+key);
          return cache.get(key);
         }
          cache.set(key,fn(...args));
          console.log("Previous value "+key);
         
    }
    return cache.get(key);
    

  };
}

function prevItemMemory(prevItem,currentValue,currentIndex,array)
{ 
  if(currentValue !=undefined)
  {
    if (prevItem == array[0])
    {
     arr2[0]= prevItem;
    }
    else
    {
    arr2[currentIndex-1]=prevItem;
    
    }
    tempCurrent=currentValue ;
    console.log("initial   "+prevItem + tempCurrent);
    arr2[currentIndex]=tempCurrent;
  
}
return arr2;
  
}

const prevItem= memoize(prevItemMemory);
const numbers = [2,3,4];
const arr2=[];
var tempCurrent=0;
prevItem(numbers.reduce(prevItemMemory));
