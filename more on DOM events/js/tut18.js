console.log("tutorial 18");

let btn = document.getElementById("btn");
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);

// some events are click , dblclick , mousedown , mousemove , mouseenter , mouseleave

function func1(e) {
    console.log("thanks",e);

    //to prevent form from submitting
    e.preventDefault();
}

function func2(e) {
    console.log("double clicked",e);

    //to prevent form from submitting
    e.preventDefault();
}


document.querySelector(".no").addEventListener('mouseenter',function (e) {
    document.body.style.backgroundColor = "red"
    console.log("u enetered no");
})

document.querySelector(".no").addEventListener('mouseleave',function (e) {
    document.body.style.backgroundColor = "white"
    console.log("u exited no");
})