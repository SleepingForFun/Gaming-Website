document.getElementById('spin').addEventListener('click',startspin)
p=100;

function randomspins(){
    rspins = Math.floor(Math.random() * 100)
    shown = '';

    if(rspins <=30){
        shown = '7';
    }
    else if(rspins <=55 & rspins >=31){
        shown = "?";
    }
    else if(rspins <=70 & rspins >= 56){
        shown = 'Crazy';
    }
    else if(rspins <=90 & rspins >= 71){
        shown = 'O.O';
    }
    else {
        shown = 'wow';
    }
    return shown;
}

function startspin(){
    dis1 = randomspins();
    dis2 = randomspins();
    dis3 = randomspins();
    

    text = dis1 + '    ' + dis2 + '    ' +dis3; 
    
    document.getElementById('three').innerHTML = text;
    
    if (dis1 === dis2 & dis2 === dis3){
        score(dis1);
    }
    else{
        lose();
    }

}

function score(x){
    
    if (x === '7'){
        p+=777;
    }
    else if(x === '?'){
        p+=Math.floor(Math.random()*100000)
    }
    else if(x=== 'Crazy'){
        p = p*3;
    }
    else if (x ==='O.O'){
        p+=1;
    }
    else{
        p+=1000
    }
    document.getElementById('points').innerHTML = p;
}

function lose(){
    p = p-1;
    document.getElementById('points').innerHTML = p;
}