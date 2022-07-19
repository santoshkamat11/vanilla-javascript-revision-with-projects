console.log("tut 20");

localStorage.setItem("name","harry");
localStorage.setItem("name2","rohan");
console.log(window.localStorage.name);
console.log(typeof window.localStorage.name);


let name2 = localStorage.getItem("name2");
console.log(name2);

// remove name2
localStorage.removeItem("name2");


// clearing local storage
localStorage.clear();
let name = localStorage.getItem("name");
// following prints null as no such key is there as it was cleared
console.log(name);



let impArray = ['adrak','pyaz','bhindi'];
// following will store as string. but we want array
localStorage.setItem('subzi',impArray);

// solution
localStorage.setItem('subzi',JSON.stringify(impArray));
let subzi = JSON.parse(localStorage.getItem('subzi'));
console.log(subzi);


//sessionStorage vs localStorage
// sessionStorage is removed after browser is closed
// localStorage still remains after browser is closed