const goodMorning = true;
const goodAfternoon = false;

let abc = {
    name: "Jonathan",
    age: 23,
    city: "Cox's Bazar"

}

let a = "hello"
let b = a;
console.log(b)
b = "Meow"
console.log(b)
console.log(a)

let cba = abc;
console.log(cba);

cba.age = 34;
console.log(abc);
//console.log(abc.name)