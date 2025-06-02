const function4 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data from F4");//resolve promise
           
        },2000);
    });
};

const function5 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("data is not available"); //rejecting promise
           
        },2000);
    });
};

const function6 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("data from F6");//resolve promise
           
        },2000);
    });
};

Promise.allSettled([//means give me allSettled values for promises here in form of array for all rejected and resolved promises with reason and values.
    
    function4(),
    function5(),
    function6()])
    
    .then(results=>{ //this results array for all values
        results.forEach(result=>{
            if(result.status =='fulfilled'){
                console.log("All data fetched: ", result);
            }
            else{
                console.log('reason for rejection',result);
            }
        })
    })
    



