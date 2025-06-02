//Data manupilation fo array
/*1.map: calls defined callback fucttion for each element if array and then returns the array of the results*/
let x = [1,2,3,4,5];
let y = x.map((e) => e*2);
console.log(y);//prints [ 2, 4, 6, 8, 10 ]

//without declaring new variable
console.log(x.map((e) => e*3)); // prints [ 3, 6, 9, 12, 15 ]


//F to C using standard formula (F-32 ) * (5/9)
let fahTemp = [32,56,657,445,23];
function convertTemp (temp){ 
    return (temp-32) * (5/9);
}
let celTemp = fahTemp.map(convertTemp); //  in map callback function which called function convertTemp
console.log(celTemp);

/*************************************************************************/

/*2.filter: returns the element of an array the meets the specified condition in callback*/
let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.filter((a ,b) => (a%2 == 0))); // parameter: a is value, b is index(optional). prints [2,4,6,8,10]
let oddNum = num.filter((a) => (a%2));
console.log(oddNum); // prints [1,3,5,7,9]

//filtering of data of large dataset
let employee =[
    {name:"john", age:30, location:"USA", gender:"male"},
    {name:"Kyle", age:20, location:"Canada",gender:"male"},
    {name:"Priya", age:20, location:"India",gender:"female"},
    {name:"Ash", age:40, location:"UK",gender:"female"}
];
let d = employee.filter((emp)=>{
return emp.gender=='female'&& emp.age>30; // returns as Ash
})
console.log(d);//prints details of Ash

/*********************************************************************************/

/*3.reduce: calls specified callback for all elements of array. Returns accumulated result of value from callback function */
let number = [1,2,3,4,5]; //total is 15
let t =number.reduce((acc,num)=>acc+num,0);// acc is accumulated value. Number is the value from array. 0 refers to initial value of acc.
console.log(t);//prints 15


//find max number in array with reduce
let mark = [23,45,60,90,10];
let maxNum =mark.reduce((max,num1)=>{
    if(num1>max){
        return num1;
    }
    else{
        return max;
    }
},mark[0]);//this is initialization value of max
console.log(maxNum);

//cart: items and price - find total of them
let cart=[
    {itemName: "jeans",price:50},
    {itemName:"shoes",price:200},
    {itemName:"bag",price:3000}
]
let totalBill = cart.reduce((total,item)=>total+item.price,0);
console.log(totalBill); //prints total