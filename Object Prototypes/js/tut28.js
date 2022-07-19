console.log("tutorial 28");

// Object literal. Object.prototype
let obj = {
    name : "harry",
    channel : "code with harry",
    address : "Mars"
}
console.log(obj);


function Myobj(givenName){
    this.name = givenName;
}

let obj2 = new Myobj("harry");

// if we want to put some functions inside object prototype it can be done as follows
// the prototypes of objects literals cannot be changed as below
Myobj.prototype.getName = function(){
    return this.name;
}

Myobj.prototype.setName = function(newName){
    this.name = newName;
}

obj2.setName("Harry changed");
console.log(obj2.getName());
