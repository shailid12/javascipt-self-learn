function getEvenNumber(value,delay){ //user passes value and delay time out 

    const w = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value%2==0){
                resolve(value); //calles resolve which initiates .then()
            }
            else{
                reject(new Error("value is not even number")); //calls reject which initiates .catch()
            }

        },delay); //user passes the delay timeout valye
    })
    return w;
}

//promise chain. Here calling getEvenNumber functtion which contains Promise creation and its object
getEvenNumber(4,1000)
.then(result=>{
    console.log("step 1: getting the result with evenNumber",result);
    return getEvenNumber(3,1000); //here it is chaining as this is calling getEvenNumber again
    //here it means it is returning another promise.
    //whatever the result of this then blog becomes input for following then block, howeer if condtion is not met then it jumps to catch block.
})
.then(result=>{//this then does not get executed as condition did not fullfill
    console.log("step 2: getting the result with evenNumber",result);
})
.catch(error=>{//since promise got rejected it comes to catch block
    console.log("promise chain error: ",error)
});