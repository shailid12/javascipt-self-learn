/*In java :
when we declare multiple methods with same Name and different count of parameters it is called overloading.
eg. public static int sum(n){}, public static int sum(n,m){} , public static int sum(n,m,p){}
For us to call specific method it rquires us to pass the number of parameter respective to which method we want to invoke.
sum(2); sum(2,7); sum(5,6,8); //calls respective method with number of parameters.*/

/*
In js: It does not have concept of overloading/polymorphism like Java. 
During runtime each function with same name replaces the previous function. This way it calls latest function only.
It automattically invokes last method and if parameter is not passed then it gives undefined as console output.
*/

function print(){
    console.log("hi");
}

//regardless of location of method calling it will automatically calls latest method.
console.log(print()); //prints :  my name is Aahana my age is undefined 

function print(name){
    console.log("my name is "+name);
}

function print(name,age){
    console.log(" my name is "+ name+" my age is "+age);
}

// here we are not passing any variable. As mentioned above it will call latest method and since variables are not passed it will give undefined output.
console.log(print()); //prints: my name is undefined my age is undefined
console.log(print("Aahana")); //prints :  my name is Aahana my age is undefined 
console.log(print("Shaili",30));//prints :  my name is Shaili my age is 30.


//To overcome above problem we need to use if else condition within the funtion.However it increases compile time and makes code lengthy with multiple conditions.
function browserInfo(browserName, browserVersion, remoteExecution){ 
    //here let's say browserName is mandatory and other are optional. so to achieve overloading we need below logic.
    if(typeof browserVersion=='number'&& remoteExecution=='boolean'){
        console.log(`browser Name : ${browserName}, browser Version : ${browserVersion}, remote execution : ${remoteExecution}`);
    }
    else if(typeof browserVersion=='number'){
        console.log(`browser Name : ${browserName}, browser Version : ${browserVersion}`);
    }
    else{
        console.log(`browser Name : ${browserName}`);
    }
            }

    browserInfo('chrome',113,true); //browser Name : chrome, browser Version : 113
    browserInfo('firefox',112);//browser Name : firefox, browser Version : 112
    browserInfo('edge');//browser Name : edge
    browserInfo();//browser Name : undefined