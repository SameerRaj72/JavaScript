let max=parseInt(prompt("enter the maximum number"))
while(!max){
    max=parseInt(prompt("enter a valid a number"))
}

const targetNum=Math.floor(Math.random()*max)+1

let guess=(prompt("enter your first guess!(Type 'q' to quit )"))
let attempts=1

while(parseInt(guess)!==targetNum){
    if(guess=='q') break
    guess=parseInt(guess)
   
    if(guess>targetNum){
        guess=prompt("Too high Enter a new guess")
        attempts++
    }
    else if(guess<targetNum){
        guess=prompt("Too low! Enter a new guess")
        attempts++
    }
    else{
        guess=prompt("Invalid guess please enter number or q to quit")
    }
}
if(guess=='q'){
    console.log("OK ,YOU QUIT!");

}
else{
    console.log("CONGRATS YOU WIN");
    console.log(`you got it! It took you ${attempts} to guesses`);
}