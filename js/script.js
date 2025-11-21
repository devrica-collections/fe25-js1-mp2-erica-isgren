let numberOfRolls = 0;
let numberOfRound = 0;
let score = 0;
let totalScore = 0;
let previousDice = 1; 
let playerName = 'Walter White'; // Default name if player doesnt pick name

const namePlate = document.querySelector('#nameplate');
const btnRoll = document.querySelector('#roll');
const btnHold = document.querySelector('#hold');
const totalPoints = document.querySelector('#totalpoints');
const currentPoints = document.querySelector('#currentpoints');
const currentRounds = document.querySelector('#roundnumber');
const currentRolls = document.querySelector('#currentrolls');

namePlate.addEventListener('click', updateName);
btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', hold);

const diceVis = [document.getElementById('die one'),
                document.getElementById('die two'),
                document.getElementById('die three'),
                document.getElementById('die four'),
                document.getElementById('die five'),
                document.getElementById('die six'),
            ];

// Get playername name and display it
function updateName(){
    playerName = prompt('Enter your name');
    namePlate.innerText = `Player: ${playerName}`;
}

// Roll dice and log your current score
function diceRoll(event){
    event.preventDefault();
    let dice = Math.floor(Math.random() * 6) + 1;
    score += dice;
    numberOfRolls++;
    
    currentPoints.innerText = `Current round points: ${score}`;
    currentRolls.innerText = `Number of rolls: ${numberOfRolls}`;

    // Lose round if dice rolls 1
    if (dice == 1){
        score = 0;
        numberOfRolls = 0;
        newRound();
        currentPoints.innerText = `You rolled a ${dice}. Current points have been reset`;
    }

    // Display the rolled dice
    let showDice = diceVis[dice -1];
    showDice.style.display = "flex";

    // Hide the previous dice, unless its the same die
    if (previousDice !== dice){
        let hideDice = diceVis[previousDice -1];
        hideDice.style.display = "none";
        previousDice = dice;
    }
}

// Hold current score and add it to totalscore
function hold(event){
    event.preventDefault();
    totalScore += score;
    score = 0;
    numberOfRolls = 0;
    newRound();
    totalPoints.innerText = `Total points: ${totalScore}`;

    if (totalScore >= 100){
        alert(`Yippie you won!! Great job ${playerName}!`);
    }
}

function newRound(){
    numberOfRound++;
    currentRounds.innerText = `Number of rounds: ${numberOfRound}`;
}