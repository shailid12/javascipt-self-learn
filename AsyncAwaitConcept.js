//async function without await
async function f1(){
    console.log("This is async without await");
    return 42; //return resolved promise which is mandatory on top of 42.
}
f1().then(result=>{
    console.log(result);
});

/*********************************************************************/


//async function without await but with error
async function f2(){
    console.log("This is async without await but with error");
    throw new Error("async - error"); //throw rejected promise which is mandatory on top of error
}
f2().catch(errorMsg=>{
    console.log(`the error msg : ${errorMsg}`);
});

/*************************************************************************/

//async function with resolved/reject promise
function getInfo(){
    return new Promise((resolve,reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber<0.5){
            resolve(randomNumber);
            }
            else{
                reject(new Error("wrong value error"));
            }
        },2000);
    })
}

//create async function ccalling getInfo

async function getNumberInfo(){
    try{
        const resultnum=await getInfo();//async step - await meaning it will wait for 2000 ms for getInfo call then store retuned value in result
        console.log("Result: ",resultnum);//sync step
    }
    catch(error){
        console.log("value error: ",error);
    }
}

//calling getNumberInfo\
getNumberInfo();