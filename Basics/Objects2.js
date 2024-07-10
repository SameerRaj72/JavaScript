//const tinderUser=new Object() non-singleton
const tinderUser={} //Singleton
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"Samir@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sameer",
            lastname:"raj"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        name:"samir"
    },
    {

    }
]
users[1].name
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
