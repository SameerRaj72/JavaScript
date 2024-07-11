

function sayMyname(){

    console.log("S");
    console.log("a");
    console.log("m");
    console.log("i");
    console.log("r");
}

//sayMyname()

// function addTwoNumbers(num1,num2){  //num1 num2 are parameter
//     console.log(num1+num2);
// }

// const result=addTwoNumbers(3,4) //3,4 are arguments

// console.log(result);

function addTwoNumbers(num1,num2){  //num1 num2 are parameter
    // let result=num1+num2
    // return result
    return num1+num2
}

const result=addTwoNumbers(3,4) //3,4 are arguments

//console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username}  just logged in`
}
//console.log(loginUserMessage("samir"))
//console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,300,500));

const user={
    username:"sameer",
    price:100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)

handleObject({
    username:"sam",
    price:599
})

const myNewArray=[200,400,100,900]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
