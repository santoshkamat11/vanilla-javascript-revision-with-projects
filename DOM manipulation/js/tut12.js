let a = document;
a = document.all;
a = document.body;
a = document.forms[0]
a = document.forms[1]
console.log(a);

console.log("printing all elements from document");
b = document.all
Array.from(b).forEach(function(element){
    console.log(element);
})

console.log(`total links are ${document.links.length} `)
console.log(`link is ${document.links[0].href}`)
