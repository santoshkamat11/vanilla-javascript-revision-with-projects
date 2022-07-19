console.log("welcome to tut 15");

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);
// console.log(cont.childNodes[0].nodeName);
let nodeType = cont.childNodes[0].nodeType;
console.log(nodeType);

/*
Node types
1. element
2. attribute
3. text node
8. comment
9. document
10. docType
*/

let container = document.querySelector("div.container");
console.log(container.children[1].children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount)


console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);