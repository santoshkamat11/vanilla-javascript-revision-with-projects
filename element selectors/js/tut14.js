console.log("welcome to tutorial 14");

/*
1. single element selector
2. multi element selector
*/

// single element selector
let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerText = "harry is a good boy";
element.innerHTML = "<b>harry is a good boy</b>";
// console.log(element.innerText);



// querySelector gives only first element. anyways id is unique only below 
let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child");
sel = document.querySelector("h1");
sel.style.color = "green";
// console.log(sel);





// mutli element selector
let elems = document.getElementsByClassName("child");
console.log(elems[2]);

elems = document.getElementsByClassName("container");
console.log(elems[0].getElementsByClassName("child"));


elems = document.getElementsByTagName("div");
console.log(elems);


Array.from(elems).forEach(element => {
    element.style.color = "blue";
});