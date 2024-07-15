// function greet(firstname,lastname){
//     console.log(`hey there ${firstname} ${lastname}`);
// }

// greet("sameer","raj")

// function rant(message){
//     console.log(`${message}`.toLocaleUpperCase());
//     console.log(`${message}`.toLocaleUpperCase());
//     console.log(`${message}`.toLocaleUpperCase());
// }
// rant("I hate beets")

// function repeat(str,numTimes){
//     let result=''
//     for(let i=0;i<numTimes;i++){
//         result+=str
//     }
//     console.log(result);
// }

// repeat("sameer",5)


// function isSnakeEyes(a,b){
//     if(a===1 && b===1){
//         console.log("Snake Eyes!")
//     }
//     else{
//         console.log("Not Snake Eyes!");
//     }
// }
// isSnakeEyes(1,1)

// function capitalize(string){
//     return string[0].toUpperCase()+string.slice(1);
// }
// console.log(capitalize("eggplant"))

// function sumArray(arr){
//     let total=0
//     for(let num of arr){
//         total+=num
//     }
//     return total
// }
// console.log(sumArray([3,4,5,6]));

// function returnDay(num){
//     const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
//     for(let i=0;i<=days.length;i++){
//         if(num<1 || num>7){
//             return null
//         }
//         else{
//             return days[num-1]
//         }
//     }
// }
// console.log(returnDay(0))