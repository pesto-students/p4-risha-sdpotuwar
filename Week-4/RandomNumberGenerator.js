function getNumber()
{
    let randomNumber = Math.random();
    if(randomNumber % 5 === 0)
    { return true;}
    else{   return false;}
}


const myPromise = new Promise(function (resolve, reject) {
    setTimeout(()=>{
     if(getNumber())
     {
        const successObj={
            msg:'Promise Resolved'
        }
        resolve(successObj);
     }   
    else{
        const errorObj={
            msg:'Promise Rejected'
        }
        reject(errorObj)
    }
    },
    2000); 
}).then(x=>console.log(x))
.catch(x=>console.log(x));