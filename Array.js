//declaring array
let myArray = []; // this iss empty array
let numArrayy = [1,2,3,4,5]; // array with numbers
let fruit = ["orange","apple","banana","grapes"]; // array with strings


/**************************************************************************/

/*1. Push Method - add new elements to the end of array*/
let alpha=['a','b','c'];
alpha.push('d','e');
console.log(alpha); // prints [a,b,c,d,e]

/***************************************************************************/

/*2.Pop Method - remove the last element of array*/
let number = [1,2,3,4,5];
number.pop();
console.log(number); //prints [1,2,3,4]

/***************************************************************************/

/*3.Shift Method - remove first element of array and returning it*/
let lang = ["Java","JS","TS","C#"];
let firstLang = lang.shift();
console.log(firstLang); // prints Java
console.log(lang); //prints [JS, TS, C#]

/**************************************************************************/

/*4.Unshift Method - add elements in the begining of array*/
let tools = ['selenium','cypress','restassured'];
tools.unshift('Playwrite','robotframework');
console.log(tools); // prints [Playwrite, robotframework, selenium, cypress, restassured]
/////////////////////// Length of array///////////////////////
let l = tools.length;
console.log(l);
/////////////////////////OR//////////////////////////////////
console.log(tools.length);

/**************************************************************************/

/*5.Splice Method:Removes element from array and if necessary insert new element in their place and returning array of deleted element*/
let animal = ['cat','dog','bird','fish','mouse','elephant'];
let deletedAnimal = animal.splice(1,2,'monkey','lion','frog'); //start at index (1). Count for 2 elements. Insert new element(s) -  monkey,lion,frog at that position.
//Start- zero based location in array from which to start removing elements. 
// Count of - to define numbwer of elements to be removed.
//insert new element(s) in place of deleted element(s)
console.log("Current Array of animal:")
console.log(animal); // prints [Cat, monkey, lion, frog, fish, mouse, elephant]
console.log("Array of Deleted animal:")
console.log(deletedAnimal); // prints returned array of deleted animal [dog,bird]

/**************************************************************************/

/*6.Slice Method: returns section of array from defined index and omitting end index value of array */
let p = [1,2,3,4,5,6];
let n = p.slice(1,3); // start at index (1). End at index(3). this excludes value 4 at index(3). 
//Start - begining index of speicified portion of array. if undefined starts at 0.
//end - the end index of the specified portion of array. This is exclusive of element at the 'end' index. if undefined then slice extends to end of array.
console.log(n); //prints [2,3] 
let m = p.slice(1,-2); // returns array from index (1). Here, -2 referes to  second last element of index as end.
console.log(m);//prints [2,3,4]
let q = p.slice(2,2); // here starts at index (2) and ends at index (2) exclusing end index value. this results in empty array.
console.log(q); // prints empty array []
let s = p.slice(3,1); // also an empty array because it always goes from index 0 as start.
console.log(s);//prints empty array []
let r = p.slice();// since undefined it will go to the very end of array from beginging of array.
console.log(r); //printss [1,2,3,4,5,6]

/******************************************************************************************/

/*7.Concat Method:combines two array into one and return it*/ 
let a = ['a','b','c'];
let b = ['x','y','z'];
let c = a.concat(b); // combines array and returns it. Here a,b,c comes first because in array a it is concating array b
console.log(c);//prints [a,b,c,x,y,z]
let d = b.concat(a); // combines array and returns it. Here x,y,x comes first because in array b it is concating array a
console.log(d); //prints [x,y,z,a,b,c]

/*******************************************************************************************/

/*8.IndexOf Method: returns the index of first occurance of value in array. If particular occurance is not in array then it returns index value of -1 */
let colour = ['red','blue','black','yellow','red'];
let i = colour.indexOf('red'); //retruns the index of first occurance of red.
console.log(i); // this will print 0
let k = colour.indexOf('red',2);//this will start looking for occurance from the index(2) and then returns index of occurance from there.
console.log(k); //this will print 4
let t = colour.indexOf('red',colour.indexOf('red')+1)//in this it will look for first occurance and then +1 will indicate it to move it to the next occurance and return its index.
console.log(t);//this will print 4
let j = colour.indexOf('white'); //looks for occurance of white in entire array if not found then reutrns -1.
console.log(j);//this will print -1

/********************************************************************************************/

/*9.Includes Method:returns true or false*/
let people = ['developer','QA','Product Owner','Scrum Master'];
let peopleflag = people.includes('HR'); //returns false as HR is not included in entire array
console.log(peopleflag);//prints false
let peoplef = people.includes('QA',3);//returns false as it looks for QA from idex position (3)
console.log(peoplef);//prints false
let peoplefl = people.includes('Product Owner',2);//returns true as it looks fro QA from idex position (3)
console.log(peoplefl);//prints true

/********************************************************************************************/

/*10.ForEach Method: iterate array for each element */
let num = [1,2,3,4,5,6];
num.forEach((w,t) => { //paramete: first is value , second is index. Here, index is optional
    console.log("index"+ t+ "value"+w); //prints 1,2,3,4,5,6
    console.log(w*2);//prints multiplication 2,4,6,8,10,12
})

