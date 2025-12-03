
const min=1;
const max=100;
let answer=Math.floor(Math.random()*(max-min+1)) + min;

let attempt=0;
let guess;
let running=true;

while(running){
   guess=window.prompt(`Guess a number between ${min} and ${max}`);
   guess=Number(guess);
   if(isNaN(guess)){
    window.alert("You can only write a number");
   }
   else {
    attempt++;
    if(guess > answer){
    window.alert(`lower than ${guess}`);
   }
   else if(guess < answer){
    window.alert(`higher than ${guess}`)
   }
 else{
    window.alert("boom you have won")
    Window.alert(`You have won the game and this is your attempt =${attempt}`);
    running=false;
 }
 }
}