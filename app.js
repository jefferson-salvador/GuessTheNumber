let num1 = Math.floor(Math.random() * 10);
const guessNum = () => {
    let guess = document.getElementById("guess").value;
    
    if(guess > num1){
        document.getElementById("result").innerHTML = `The number is lower than ${guess} <br> Try again`;
    }
    else if(guess < num1){
        document.getElementById("result").innerHTML = `The number is greater than ${guess} <br> Try again`;
    }
    else{
        document.getElementById("result").innerHTML = `Congratulations! The number is ${guess}`;
    }
    logs(guess);
    document.getElementById('guess').value = '';
}

const numArray = [];
const logs =(guess)=>{
    numArray.push(guess);
    document.getElementById("logs").innerHTML = `${numArray}`;
}
