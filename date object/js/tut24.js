console.log("welcome to tut 24");

let today = new Date();
console.log(today);

let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 13 1976');
otherDate = new Date('09/16/1976');
console.log(otherDate);


let a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
otherDate.setDate(23);
otherDate.setMonth(0);
// console.log(a);
console.log(otherDate);