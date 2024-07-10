const marvel_heros=["thor","Ironmna","Spiderman"]
const dc_heros=["Superman","falsh","batman"]
//marvel_heros.push(dc_heros)//it will work on original Array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros=marvel_heros.concat(dc_heros)//concat return a new Array
// console.log(all_heros)

// const all_new_heros=[...marvel_heros,...dc_heros] //... is spread operator
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Raj"))
console.log(Array.from("Raj"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))