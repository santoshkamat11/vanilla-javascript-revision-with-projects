console.log('this is tut 10');

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"))

const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name = 'SkillF';


let val = mygreet(name, 'Thanks a lot');
console.log(val);

console.log("without passing second parameter");
console.log(mygreet(name));


const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}

console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});  