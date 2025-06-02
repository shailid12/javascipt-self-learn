//returns resolved promise
const function4 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolving");//resolve promise
           
        },1000);
    });
};

//returns rejected promise
const function5 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Rejecting"); //rejecting promise
           
        },2000);
    });
};

//running promise.race() to see which promise settles first
Promise.race([
    function4(),
    function5()])
.then(result=>{
    console.log("result: ", result)
})
.catch(error=>{
    console.log("Error: ",error)
})