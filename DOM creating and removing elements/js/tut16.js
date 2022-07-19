// console.log("tutorial 16");
// let element = document.createElement('li');

// // add a class to li element
// element.className = "childul";
// element.id = "createdLi";
// element.innerText = "hello this is created by harry";
// element.setAttribute('title','mytitle');

// let ul = document.querySelector("ul.this");
// ul.appendChild(element);
// console.log(ul);



// the above can be done as well
let element = document.createElement('li');
let text = document.createTextNode("I am a text node");
element.appendChild(text);

element.className = "childul";
element.id = "createdLi";
element.setAttribute('title','mytitle');
let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);





// new elem2
let elem2 = document.createElement('li');
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("this is a created node for elem2");
elem2.appendChild(tnode);


let secondLi = document.querySelector("ul.this").firstElementChild.nextElementSibling;
secondLi.replaceWith(elem2);


// replacing first li in other way
let myul = document.getElementById("myul");
myul.replaceChild(secondLi,document.getElementById("fui"));


// remove child
myul.removeChild(document.getElementById("lui"));


let pr = elem2.getAttribute('id');
console.log(pr);
// check if elem2 has class attribute
console.log(elem2.hasAttribute('class'));


// remove id attribute for elem2
elem2.removeAttribute("id");
console.log(elem2);