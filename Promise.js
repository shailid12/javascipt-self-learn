//Promise (Class in JS) are way to handle async operation in more organized and redable manner.
//they provide a clearer syntax for dealing with async code compared to traditional callback function based approach.
//they also provide a struccture to manage and chain async tasks.
//Promise are widely used for tasks like making network request, reading/writing files, and other operations that does not blok the main thread.
//It can be in one of three states : pending, fullfilled(with value) and rejected(with reason). Promise always start with pending state.
//once promise is fullfilled or rejected it is considedred as settled and its state can not be changed.
//Promise represents a value that may not be available yet but will be resolved at some point in future.
//Callbacks: Promise uses .then() and .catch() methods to specifiy flow for when promise is fullfilled or rejected. This promotes readabled and structured flow.
//Chaining : Promise can be easily chained using .then() allowing you to sequence async operations.It is refered as promise chaining
//Error Handelling: promise has built in error handelling via .catch() , making it easy to handle and propagate erros in async code.

//async operation
const randomNumPromise = new  Promise((resolve,reject) => { //creating object of promise class containing resolve callback and reject callback
    setTimeout(()=>{ //async
        const randomvalue = Math.random();//generating random value
        if(randomvalue>0.5){
            resolve(randomvalue);//if sucessful call resolve with value which basically initiates .then()
        }
        else{
            reject(new Error("value is too small"));//object creation of errorHandler class wirh message and calling reject which basically initates .catch()
        }
    },2000);
});

randomNumPromise //using object of promise to get details of resolve and reject
.then(result=>{//promise resolved
    console.log("promise is fullfilled with value: ",result );
})
.catch(error=>{ //promise rejected
    console.error("promise is reject with error: ",error);
})


