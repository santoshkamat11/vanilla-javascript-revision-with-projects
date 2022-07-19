console.log("tut 21");

/*
You have to create a div tag and inject it into a page which contains a heading
whenever someone clicks on the div, it should be converted into an ediatble item.
whenever user clicks away, save the node into local storage

*/

// create new element
let divElem = document.createElement("div");
// add text to that created element
let val = localStorage.getItem("text");
let text;
if(val == null){
    text = document.createTextNode("this is my element. click to edit it");
}else{
    text = document.createTextNode(val);
}

divElem.appendChild(text);
// give element id , style and class
divElem.setAttribute('id', 'elemid');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding: 23px;');

// grab the parent container
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");


// insert element with id first
container.insertBefore(divElem, first);

// add event listener to the div elem
divElem.addEventListener('click', function () {
    let noOfTextAreas = document.getElementsByClassName('textarea').length;
    if (noOfTextAreas == 0) {
        // even we can do elemid.innerHTML
        let html = divElem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    let textarea = document.getElementById("textarea");
    textarea.addEventListener('blur', function () {
        divElem.innerHTML = textarea.value;
        localStorage.setItem("text", divElem.innerHTML);
    })
});

