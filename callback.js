//callback fucntion
//Async call/task ----> once this task is completed then only callback function is called




/*basic callback - without any Async process*/

function greet(name,callback){ //this takes value parameter and function name
    console.log('Hello I am'+name);
    callback(); //this calls the function based on name that is passed-refer as callback function
}

//callback fucntion
function welcome(){
    console.log('welcome');
}

greet('shaili',welcome); // in greet function passing the value parameter and name of callback function that need to be called.







/*Callback function with Async process*/
function printInfor(name,callback){
    //Async function/task
    setTimeout(function(){ //SetTimeeout is inbuilt method here which is taking some annonymous function
        console.log('printing info for '+name);
        callback('pls call me back');//passing msg parameter value for callback function name displaymsg
    },1000)//this is set delay timer for setTimeout 1000 ms/1 sec. This means it will execute line 31 and 32 after 1 sec.

    }


function displaymsg(msg){
    console.log(msg);
}

printInfor('Aahana',displaymsg);


//another example
function getuserData (userid,callback){
    setTimeout(function(){
        const users = {
            1: {id:1,name:'Darshit'},
            2:{id:2, name:'Shaili'},
            3:{id:3, name:'Aahana'}
        };
        const user = users[userid] //fetching ther user details from users object based on userId
       if(user){
            callback (null,user);//here passing null for error if there is a user to the callback function
        }
        else{
            callback('user not found',null);//passing null for user since user is not found callback function
        }     
    },5000)
}


//callback function with parameter and if=else
function handleUserData(error , user){
    if(error){
        console.log("error:" , error); 
    }
    else{
        console.log("user:" , user);//this is done with , because it an object with exact details that we want to print. + will cause concat meane print user[object object].
        //prints user: { id: 1, name: 'Darshit' }
    }

}

getuserData(4,handleUserData);