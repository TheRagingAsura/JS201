while(true) {
    let randomNum = Math.round(Math.random() *10);    
    let tester = prompt("guess my number");

    if(tester == randomNum) {
        alert("You win!")
        break;
    } else {
        console.log('Number was actually', randomNum);
    }
};
