// primitive data types

// string
var name = 'harry';
console.log("my name is "+name);
console.log("my data type is "+typeof(name));

// numbers
let marks = 34;
console.log("data type is "+typeof(marks));

// boolean
let isDriver = true;
console.log("data type is "+typeof(isDriver));

// null
let nullVar = null;
console.log("data type is "+typeof(nullVar));

// undefined
let undef = undefined;
console.log("data type is "+typeof(undef));



// Reference data type
let myarr = [1,2,3,4]
console.log("data type is "+typeof(myarr));

// Object Literals
let Studentmarks = {
    harry : 89,
    shubham : 78 ,
    rohan : 34 
}
console.log("data type is "+typeof(Studentmarks));

// function
function findName() {
    console.log("function");
}
console.log("data type is "+typeof(findName));

// date
let date = new Date();
console.log("data type is "+typeof(date));