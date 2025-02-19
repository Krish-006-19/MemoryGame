let start = document.querySelector('.start');
let Again = document.querySelector('.start');
Again = start;
let p1 = document.querySelector('.p1');
let btn = document.querySelectorAll('.btn');
let bool = true;
let rand;
function randomnum (){
    rand = parseInt((Math.random()*9)+1);
    setTimeout(()=>{
    document.querySelector('.p2').innerHTML = `<b>Locate the number:${rand}</b>` ; 
    },3000);
    bool = false;
}
function countdown(){
    let t=2;
    p1.innerText = t;
    let int = setInterval(()=>{
        t--;
        if(t>=0){
        p1.innerText = t
        if(t === 0){
            clearInterval(int);
            p1.innerText=``;
        }}
    },1000);
}
function hide(){
    document.querySelectorAll('.p').forEach(value=>{
        value.classList.remove('p');
        setTimeout(()=>{
            document.querySelector('.p2').classList.remove('dstart');
        value.classList.add('p');
        },2000);
    });
    
}
start.addEventListener('click',()=>{
    randomnum();
});
Again.addEventListener('click',()=>{
    randomnum();
});
start.addEventListener('click',()=>{
    countdown();
});
Again.addEventListener('click',()=>{
    countdown();
});
start.addEventListener('click',()=>{
    hide();
});
Again.addEventListener('click',()=>{
    hide();
});
btn.forEach(value=>{
    value.addEventListener('click',()=>{
        if(!bool){
            document.querySelector('.p3').classList.remove('dstart');
        if(rand == value.innerText){
            document.querySelector('.p3').innerHTML = `<b>You Won!</b>`;
            window.location.href = "blank.html";
        }
        else{
            setTimeout(()=>{
                document.querySelector('.p3').classList.add('dstart');
                document.querySelector('.p2').classList.add('dstart');
            },2000);
            document.querySelector('.p3').innerHTML = `<b>You lost!</b>`;   
            start.classList.remove('dstart');
            start.innerText = `Start Again?`;
        }}
    });
});
