console.log("tutorial 17");

document.getElementById("heading").addEventListener('click', function (e) {
    console.log("you have clicked the heading");
    console.log(e);

    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(Array.from(e.target.classList));
    console.log(e.offsetX);
    console.log(e.clientX);
    // location.href = '//codewithharry.com';
})