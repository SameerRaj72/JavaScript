let mydate=new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate) //interview question 

//let mycreatedDate=new Date(2023,0,23)
//let mycreatedDate=new Date("2024-01-14")
let mycreatedDate=new Date("10-07-2024")
// console.log(mycreatedDate.toDateString())
let mytimeStamp=Date.now()
// console.log(mytimeStamp)
// console.log(mycreatedDate.getTime())

let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1) //month start from zero that's why we use +1

newDate.toLocaleString('default',{
    weekday:"long",
})

