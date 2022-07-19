console.log("welcome to notes app");
// when page loads first or reloads call showNotes()
showNotes();

// if user adds note, add it to localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title : addTitle.value,
        text : addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notes);
    showNotes();
});

// function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCardClass card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `;
    });

    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `nothing to show! Use "Add a note" section above to add note `;
    }
}

// function to delete node
function deleteNode(index) {
    console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener('input',function() {
    let inputVal = search.value.toLowerCase();
    console.log("input event fired ",inputVal);
    let noteCards = document.getElementsByClassName("noteCardClass");
    Array.from(noteCards).forEach(function(element){
        // get first paragraph tag for card
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardTitle = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal) || cardTitle.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})