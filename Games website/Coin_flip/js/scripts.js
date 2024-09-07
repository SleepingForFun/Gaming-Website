document.getElementById('flip').addEventListener('click',start);

function start(){
    const hort = Math.floor(Math.random()*2);
    coin = '';
    if (hort === 0 ){
        coin = 'Heads'
    }
    else{
        coin = 'Tails'
    }
    document.getElementById('side').textContent = coin;
}