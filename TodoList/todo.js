let input=prompt("what would you like to do?")
const todos=['collect chicken eggs','clean litter box']
while(input!=='quit' && input!=='q'){
    if(input=='list'){
        console.log('********************');
        for(let i=0;i<todos.length;i++){
            console.log(`4{i}:${todos[i]}`);

        }
    }
    else if(input=='new'){
        const newTodo=prompt('Ok,what is the new todo?')
        todos.push(newTodo)
        console.log(`${newTodo}added to list`);   
    }
    else if(input=='delete'){
        const index=parseInt(prompt('Ok enter an index to delete'))
       if(!Number.isNaN(index)){
       const deleted= todos.splice(index,1)
        console.log(`Ok ,deleted ${deleted[0]}`)
       }
       else{
        console.log('Unknown index');
       }
    }
    input=prompt("what would you like to do?")
}
console.log("OK QUIT THE APP");
