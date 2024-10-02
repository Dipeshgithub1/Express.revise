//global variable 
let petname = 'rocky'
myfunction()

function myfunction(){
    fruit = 'apple';
    console.log(typeof petname + '-' + 'my pet name is ' + petname)
    
}

console.log(typeof petname + '-' + 'my pet name is ' + petname + 'fruit name is ' + fruit)


myfunction();
anotherFunc();
let petName;
function myfunction() {
    let petName = "Sizzer"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; // local variable
    console.log(petName);
}
console.log(petName);



//block 

{
    let num = 10;
    console.log(num)
}

//console.log(num)


//et num = 10;
//console.log(num)

function fun(){
 let num = 10;
    console.log(num)
}

fun();
console.log(num)

//arrow function 
//without paramter
const gfg = () => {
    console.log("hi greeks")
}

gfg();


const square = x => x*x;
console.log(square(4));

const gf = (x,y,z) => {
    console.log(x + y + z)
}
gf(10,20,30)

const g = (x,y,z = 30) => {
    console.log(x +" "+y+" "+z)
}
g(10,20)

//Return object literals
const makePerson = (firstname,lastname) => ({
    first:firstname,last:lastname
});

console.log(makePerson("pankaj","binder"))

const fetchData = async () => {
    const data = await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    return data.json();
}

//this keyword









