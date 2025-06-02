//case 1:
//f1 - resolve
//f2 - resolve
//f3- resolve
const function1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("data from F1");
            const d1 = [0,1,2,3,4];
            resolve(d1);//store array
        },2000);
    });
};

const function2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("data from F2");
            const d2 = [5,6,7,8];
            resolve(d2);//store array
        },2000);
    });
};

const function3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // resolve("data from F3");
           const d3 = [9,10];
            resolve(d3); //store array
        },2000);
    });
};

Promise.all([//means give me all values for promises here in form of array
    
    function1(),
    function2(),
    function3()])
    
    .then(dataArray=>{ //this dataArray is array of all resolved values/arrays
        console.log("All data from all functtion: ",dataArray)
    })
    .catch(error=>{
        console.log("error in data: ",error)
    })


/****************************************************************************************/


//case 2:
//f4 - resolve
//f5 - rejected
//f6- resolve

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

Promise.all([//means give me all values for promises here in form of array if all promise are fulfilled. here it falls in catch block and does not return details of fullfilled promises
    
    function4(),
    function5(),
    function6()])
    
    .then(dataArray=>{ //this dataArray is array of all resolved values/arrays
        console.log("All data fetched: ", dataArray)
    })
    .catch(error=>{//since one of the function has failed it directly falls into catch block.
        console.log("error in data: ",error)
    })