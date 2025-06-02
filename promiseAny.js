//it is used for handelling multiple promises and resolving with the value of first fulfilled/resolved promise,similar to promise.race()
//however, unlike promise.race() , promise.any() doesnot reject immidieately when first promise gets rejected
//instead it waits untill at least one promise fullfilled/resolved.
//if all promise are rejected then 
const function4 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data available f4");//resolve promise
           
        },2000);
    });
};

const function5 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("data is not available f5 "); //rejecting promise
           
        },200);
    });
};

const function6 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           reject("data is not available f6");//resolve promise
           
        },1000);
    });
};

//f4 - fullfilled - 2000 ms
//f5 - rejected - 100 ms
//f6 - fullfilled.- 1000 ms


Promise.any([
    
    function4(),
    function5(),
    function6()])
    
    .then(result=>{ 
        console.log("All data fetched: ", result) //will log the first promise that is resolved even if all promises are resolved it will only return the first fullfilled result.
    })
    .catch(error=>{
        console.log("error in data: ",error)
        //will log all rejection reasons for the rejected promises if none of the promise gives resolved 
        /*for exaple: error in data:  [AggregateError: All promises were rejected] {
                        [errors]: ['data is not available f4',
                                    'data is not available f5 ',
                                    'data is not available f6']}*/
    })