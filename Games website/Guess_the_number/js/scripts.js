document.getElementById('1to').addEventListener('click',function(){startg('10')})
document.getElementById('20to').addEventListener('click',function(){startg('20')})
document.getElementById('50to').addEventListener('click',function(){startg('50')})
document.getElementById('100to').addEventListener('click',function(){startg('100')})
document.getElementById('submit').addEventListener('click',check)
document.getElementById('reset').addEventListener('click',over)

pguess=document.getElementById('playerguess')

answer = 0;
scores= 0;

function startg(x){
    const random = Math.floor(Math.random()* x)
    answer = random;
    
}





function check(){
    var userGuess = parseInt(pguess.value);
    if (userGuess === answer){
        document.getElementById('message').textContent = 'Congrats you got the number correct';
        document.getElementById('guess').textContent = answer;
        score+=1;
        document.getElementById('score').textContent = score;
    }
    else if (userGuess > answer){
        document.getElementById('message').textContent = 'Guess was too big';
        document.getElementById('guess').textContent = answer;
    }
    else {
        document.getElementById('message').textContent = 'Guess was too small';
        document.getElementById('guess').textContent = answer;
        
    }
}

function over(){
    answer=0;
    document.getElementById('message').textContent = '';
    document.getElementById('guess').textContent = '';
}