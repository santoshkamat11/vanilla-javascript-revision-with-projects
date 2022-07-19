console.log("tutorial 30");

const proto = {
    slogan : function(){
        console.log("this company is the best");
    },
    changeName : function(newName){
        this.name = newName;
    }
}

const harry =  Object.create(proto);
harry.name = "harry";
harry.name = "programmer";
harry.changeName("Harry Change");
console.log(harry);


// other syntax
// if we want to override names value , we have to set writable to true
const pranav = Object.create(proto, {
    name : {value : "Pranav" , writable : true},
    role : {value : "Programmer"}
});
pranav.changeName("Pranav Kamat");
console.log(pranav);


// Employee constructor
function Employee(name , salary , experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.slogan = function(){
    return `this company is the best. Regards ${this.name}`;
}

let santosh = new Employee("Santosh",120000, 7);
console.log(santosh);
console.log(santosh.slogan());



// Inheritence

function Programmer(name , salary , experience , language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan",2000,1,"JavaScript");
console.log(rohan);
console.log(rohan.slogan());

