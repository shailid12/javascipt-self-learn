//1.find unique value from array
const w = [1,2,3,4,5,5,4,3,2,1,67,87,90];
const uniqueVal = [... new Set(w)]; //... called spread operator
console.log(uniqueVal); //prints [1,2,3,4,5,67,87,90]

//2.convert int to string
const num = 2;
const numStr = num + '';
console.log(numStr+10); //210
//or
const num1=3;
const numStr1 = String(num1);
console.log(numStr1+20);//320

//3.float to int
const floatNum = 3.24;
const intNum = parseInt(floatNum);
console.log(intNum);

//4.check if variabe is number
const v = 45;
if(typeof v == 'number' && !isNaN(v)){
    console.log(v + " is number");
}
else{
    console.log(v + " is not number");
}

//5.swap number
let a = 5;
let b = 4;
[a,b]=[b,a];
console.log(a,b);

//6.check if object has property
const pearson = {
    name:'john',
    age:30,
}
if (pearson.hasOwnProperty('age')){
    console.log("person has propery");
}

//7.remove falsy value from array (false, 0 , "",null,undefined,NaN)
const t = [false, 0 ,3,4, "",null,undefined,NaN,1,2];
const u = t.filter(Boolean);
console.log(u); //print [ 3, 4, 1, 2 ]  

//8.string -- lowercase, uppercase
const st = 'Naveen automation';
const low = st.toUpperCase();
console.log(low);
const up = st.toLowerCase();
console.log(up);

//9. check if array contains a value
const x = ['java', 'Js' , 'php'];
if(x.includes('java')){
    console.log("found it")
}

//10. check if array is empty or not
const y = [];
if(y.length == 0){
    console.log("empty array")
}


//11. generate random number
const min =10;
const max=20;
const randomNumber = Math.floor(Math.random()*(max-min+1))+min;
console.log(randomNumber);


//12. String to Number
const strNum ='32';
const n1 = parseFloat(strNum);
console.log(n1);

//13. join array into string
const word = ['Hello','World'];
const sent = word.join(' '); //giving space to join two words with space in between
console.log(sent);//Hello World

//14. get object proerty
const user = {
    name:"Mike",
    familyName: "Cook",
    Occupation:"FA"
};
console.log(user['name']);//mike
console.log(user['Occupation']);//FA

//15. clone an array or object
const mark = [10,20,30,40,50];
const duplicate = [...mark]
console.log(duplicate);//[10,20,30,40,50];

const user1 = {
    name:"Mike",
    familyName: "Cook",
    Occupation:"FA"
};
const duplicateUser ={...user1};
console.log(duplicateUser);//{ name: 'Mike', familyName: 'Cook', Occupation: 'FA' }

//16.convert object to array
const userob = {
    name:"Mike",
    familyName: "Cook",
    Occupation:"FA"
};
//Keys array
const keys = Object.keys(userob); //creates array of keys
console.log(keys);//[ 'name', 'familyName', 'Occupation' ]

//Value array
const values = Object.values(userob); //creates array of values
console.log(values);//[ 'Mike', 'Cook', 'FA' ]

//key and value array
const keyVal = Object.entries(userob); //creates array of values
console.log(keyVal);/*[
  [ 'name', 'Mike' ],
  [ 'familyName', 'Cook' ],
  [ 'Occupation', 'FA' ]
]*/


//17.get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleDateString());//2025-05-18
console.log(currentDate.getDate());//18 - just date number only

//18.check variaable is defined
let i;
if(typeof i=='undefined'){
    console.log('undefined value found!')
}


//19.truncate an array
const test = [0,1,2,3,4,5,7];
test.length = 3;//holds value of first three values only
console.log(test);//[ 0, 1, 2 ]


//20.last item in array
const pop = [0,1,2,4,6,7,8,9];
const last = pop.slice(-1);//Returns a copy of a section of an array. 
// For both start and end parameters, a negative index can be used to indicate an offset from the end of the array. 
// For example, -2 refers to the second to last element of the array.
console.log(last);// prints [9]