//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Sameer",
    "fullname":"Sameer Raj",
    age:26,
    //mySym:"mykey",//here we can see datatype of mysym is string but we want to use it as a Symbol so [mySym] is correct way
    [mySym]:"mykey1",
    email:"samir@gmail.com",
    location:"BBSR",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])
//console.log(typeof JsUser.mySym)

// JsUser.email="samir123@gmail.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)//after this we cannot change the value of email
// JsUser.email="samir1234@gmail.com"
// console.log(JsUser.email)
JsUser.greeting=function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting())

JsUser.greetingTwo=function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(JsUser.greetingTwo())