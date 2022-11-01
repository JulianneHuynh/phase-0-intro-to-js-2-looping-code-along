// Code your solutions in this file
// for loop : 
// while 

function writeCards(names, birthday){
    const newWriteCards= []
    for (let i = 0; i < names.length; i++){
        console.log(`Thank you ${names[i]}`);
        debugger;
        newWriteCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newWriteCards;
    
}


function countDown(startNumber){
    while (startNumber >= 0 ) {
        console.log(startNumber--);
    }
}