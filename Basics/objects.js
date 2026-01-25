const newApp = new Object();
const newApp2 = {} // empty object

//console.log(newApp)
//console.log(newApp2)

newApp.ID = 1123;
newApp.Name = "Showvik";
newApp.age = 23
newApp.City = "Cox's Bazar"

console.log(newApp)

const uniqueUser = {
    ID : 234,
    Name : {
        FirstName : "Jitendra",
        LastName : "Singh"
    },
    Age : 23,
    City : "Rajsthan"
}

console.log("\n", uniqueUser)

const mySymbl = Symbol("key1")

const user = {} // right now this is an empty object
// let's put something inside an object

const user1 ={
    fullName : {
        firstName : "Showvik",
        LastName : "Mazumder"
    },
    age : 23,
    School : "ITMO"
}

const {age: n} = user1
console.log(n);

user1.greetings = function(){
    console.log(`Hello ${user1.fullName.firstName} , how are you doing today?`)
}

console.log(`User one's name is ${user1.fullName.firstName} and the college is ${user1.School}`);
user1.greetings();