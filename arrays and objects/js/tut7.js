console.log('We are in tut7.js and lets discuss about arrays');
let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
console.log("marks")
console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value)

// Mutating or Modifying arrays
marks.push(3564);
console.log("output of marks.push(3564) is "+marks)
marks.unshift(1009);
console.log("output of marks.unshift(1009) is "+marks)
marks.pop()
console.log("output of marks.pop() is "+marks)
marks.shift()
console.log("output of marks.shift() is "+marks)
marks.splice(2, 3);
console.log("output of marks.splice(2, 3) is "+marks)
marks.reverse()
console.log("output of marks.reverse() is "+marks)
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)