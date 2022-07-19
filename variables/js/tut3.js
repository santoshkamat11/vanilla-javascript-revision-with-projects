console.log("tut3");

// variables in js
// var , let , const
var name = `don't do it`;
console.log(name)
var channel;
channel = "codeWithHarry"
var marks = 34;
console.log(name , channel , marks)

const ownerName = "Hari";
// ownerName = "xyz" will throw error

// no value assignment to const will also throw error

const arr1 = [12,56,34,23];
// we can do as follows
arr1.push(9);
console.log(arr1);
// we cannot do as follows
//arr1 = [1,2,4]

// var is global scoped or function scoped
var a = 10;
function f(){
    if(6 > 5){
        var b = 8;
    }
    console.log("value of a is "+a+" value of b is "+b);
}
f();

// let keyword in javaScript. let is improved version of var
let abc = 10;
function x(){
    if(6 > 5){
        let xyz = 8;
    }
    console.log("value of abc is "+abc)
    console.log("value of xyz is "+xyz);   
}
x();



