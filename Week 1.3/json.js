//JSON 

const users= '{name: "harkirat",age: 24,gender:"male}'

//JSON.perse
//Json.stringfy

const user = {
  name: "harkirat",
  gender: "male",
}

const finalString = JSON.stringify(user)
console.log(finalString["name"] )