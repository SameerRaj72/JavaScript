const myArr=[0,1,2,3,4,5,true,"sameer"]
console.log(myArr[2])
//interview Question Shallow and Deep copy

// const myHeros=["ShaktiMan","NaagRaj"]
// console.log(myHeros)

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//myArr.unshift(9)//it will add element at start but if size is bigger then it will consume  more time that's why not recommend.
//myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)

//slice ,splice

console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)

//interview Question slice vs splice 
//Answer-slice does not effect on original Array but Splice change the original Array. also in splice last index is included



