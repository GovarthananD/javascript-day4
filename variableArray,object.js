var myvar= 1;
console.log("myvar");


//Task 3: Simple Programs todo for Condition , Looping and Arrays:
let triangle = '';
for (let i = 0; i < 7; i++) {
  triangle += '#';
  console.log(triangle);
}


// Iterate through the string array and print it contents
 var strArray= ["<option>Jazz</option>",
 ,"<option>Blues</option>",
 ,"<option>New Age</option>",
 ,"<option>Classical</option>",
 ,"<option>Opera</option>"]



var strArray = [
    "<option>Jazz</option>",
    "<option>Blues</option>",
    "<option>New Age</option>",
    "<option>Classical</option>",
    "<option>Opera</option>"
  ];
  

  // var myarray=[11,22,33,44,55]

// write a code to count the elements in the array . Don’t use length property

  for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
  }


  var myarray = [11, 22, 33, 44, 55];
var count = 0;

for (let i in myarray) {
  count++;
}

console.log("Number of elements in the array:", count);

// let foods=[]

— — — — — — — — — — — — — — — -
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?


let fifthFavoriteFood = foods[4];
console.log("My fifth favorite food is:", fifthFavoriteFood);

// Object
let myobject = {1: "one", "11": 1, "name": "arun"};

console.log(myobject["11"]); // Accessing property with string key "11"
console.log(myobject.name);  // Accessing property with identifier key "name"


let myobject = {1: "one", "11": 1, "name": "arun"};

// Adding a new key-value pair
myobject["ten"] = "ten";

console.log(myobject);


