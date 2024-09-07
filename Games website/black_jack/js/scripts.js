document.getElementById('start').addEventListener('click',game)
document.getElementById('hit').addEventListener('click',hit)
document.getElementById('stay').addEventListener('click',stay)


const cards = ['A','2','3','4','5','6','7','8','9','J','Q','K','A','2','3','4','5','6','7','8','9','J','Q','K','A','2','3','4','5','6','7','8','9','J','Q','K','A','2','3','4','5','6','7','8','9','J','Q','K'];

ppscore = 0;



let playerhand = [];
let dealerhand = [];


function game(){
    ppscore = 0;
    document.getElementById('display').textContent = ''

    playerhand = [];
    dealerhand = [];

    playerhand1();
    dealerhand1();
    playerscore(playerhand);
    dealerscore(dealerhand);
    
}

function hit(){
    playerhand1();
    playerscore(playerhand);
    if (ppscore >= 21){
        GameOver()
    }
}


function stay(){
    while (dealerscore(dealerhand)<17){
        dealerhand1()
    }
    GameOver()
}

function randomcard() {
    const random = Math.floor(Math.random()*cards.length);
    return cards[random];
}

function playerhand1(){
    if (playerhand.length == 0){
        playerhand.push(randomcard(), randomcard())
    
    }
    else{playerhand.push(randomcard())}
    document.getElementById('phand').textContent = playerhand;
}


function dealerhand1(){
    if (dealerhand.length == 0){
        dealerhand.push(randomcard(),randomcard())
        
        
    }
    else {dealerhand.push(randomcard())}
    document.getElementById('dhand').textContent = dealerhand;
}

function playerscore(playerhand){
    let pscore = 0;

    
    for (let y = 0; y < playerhand.length; y++) {
        let cards1 = playerhand[y];
    
    if (cards1 === 'A'){
        if (pscore > 21)
        {pscore+=1}
        else if (pscore <= 21){
            pscore+=10;
        }
    }
    else if (cards1 === 'J' || cards1 === 'Q' || cards1 === 'K'){
        pscore+=10;
    }
    else {pscore+=parseInt(cards1)}}
    ppscore = pscore;
    document.getElementById('pscore').textContent = pscore;
    
    return pscore;
    

}


function dealerscore(dealerhand){
    let score = 0;
    for (let x = 0; x < dealerhand.length; x++) {
        let cards1 = dealerhand[x];
    
    if (cards1 === 'A'){
        if (score > 21)
        {score+=1}
        else if (score <= 21){
            score+=10;
        }
    }
    else if (cards1 === 'J' || cards1 === 'Q' || cards1 === 'K'){
        score+=10;
    }
    else {score+=parseInt(cards1)}}
    document.getElementById('dscore').textContent = score;
    
    return score;
    
}



function GameOver() {
    playerScore = playerscore(playerhand);
    dealerScore = dealerscore(dealerhand);

    

    if (playerScore === 21 & playerhand.length === 2) {
        
        document.getElementById('display').textContent = 'Blackjack!';
    } 
    else if (dealerScore === 21 & dealerhand.length === 2) {
        
        document.getElementById('display').textContent = 'You lose.';
    } 
    else if (playerScore > 21) {
        
        document.getElementById('display').textContent = 'Dealer wins.';
    } 
    else if (dealerScore > 21) {
        
        document.getElementById('display').textContent = 'You win!';
    } 
    else {
        
        if (playerScore > dealerScore) {
            document.getElementById('display').textContent = 'You win!';
        } 
        else {
            document.getElementById('display').textContent = 'Dealer wins.';
        }
    }
}