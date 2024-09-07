document.getElementById('att').addEventListener('click',attack)
document.getElementById('def').addEventListener('click',defend)
document.getElementById('buff').addEventListener('click',charge)
document.getElementById('pot').addEventListener('click',potion)


Boss=100;
Player=100;
turns = 0;
defence = 0;
chargeatt = 0;
pot = 1;
critdmg = 2.5;
crittrue = false;

function bosspattern(){
        bossdamage = 15;
        bosssuper = 30;
        if (turns % 3 === 0  ){
            document.getElementById('act').textContent = 'Boss Attacks'
            damage = bossdamage - defence;
            Player-= damage;
            defence = 0;
            document.getElementById('php').textContent = Player
            turns+=1;
        }
        else if (turns % 10 === 0 ){
            document.getElementById('act').textContent = 'Boss uses Super Attack'
            damage = bosssuper - defence;
            Player-= damage;
            defence = 0;
            document.getElementById('php').textContent = Player
            turns+=1;
        }
        else {
            document.getElementById('act').textContent = 'Recharging'
            turns+=1;
        }
        gameover();
    }

function reset(){
    chargeatt = 0;
    pot = 1;
    crittrue = false;
}


function attack(){
    attmult = Math.floor(Math.random() * 2) + 6;
    if (crittrue === true){
        crtchargedamage = attmult * chargeatt * pot * critdmg;
        Boss-=crtchargedamage;
        document.getElementById('pd').textContent = crtchargedamage
        document.getElementById('bhp').textContent = Boss
        
    }
    else if (chargeatt != 0){
        chargedamage = attmult * chargeatt * pot;
        Boss-=chargedamage;
        document.getElementById('pd').textContent = chargedamage
        document.getElementById('bhp').textContent = Boss
        
    }
    else {
        regatt = attmult * pot;
        Boss-=regatt;
        document.getElementById('pd').textContent = regatt
        document.getElementById('bhp').textContent = Boss
        
    }
    reset();
    endturn()
}

function defend(){
    defmult = Math.floor(Math.random() * 3) + 5;
    defence = defmult;
    endturn();
    
    
}

function charge(){
    chmult = Math.floor(Math.random() * 4);
    chance = Math.floor(Math.random() * 100);
    if (chance < 30){
        crittrue = true;
        document.getElementById('aaa').textContent = 'going to crit'
        
    }
    
    chargeatt = chmult;
    document.getElementById('test').textContent = chargeatt;
    endturn();
}



function potion(){
    rng = Math.floor(Math.random() * 100);
    if (rng <= 35 ){
        pot = 4;
        document.getElementById('aaa').textContent = pot;
    }
    else{
        Player-=30;
        document.getElementById('php').textContent = Player;
    }
    gameover();
}

function endturn(){
    bosspattern();
}



function gameover(){
    if (Boss <= 0){
        document.getElementById('act').textContent = 'You Won! You Beat the Boss'
        document.getElementById('att').style.color = 'green';
        document.getElementById('def').style.color = 'green';
        document.getElementById('buff').style.color = 'green';
        document.getElementById('pot').style.color = 'green';
    }
    else if(Player <= 0){
        document.getElementById('act').textContent = 'You Lost.'
        document.getElementById('att').style.color = 'red';
        document.getElementById('def').style.color = 'red';
        document.getElementById('buff').style.color = 'red';
        document.getElementById('pot').style.color = 'red';
    }

}