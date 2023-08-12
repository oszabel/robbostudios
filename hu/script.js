let body = document.querySelector('body');
try{
    body.classList=localStorage.getItem("light");
} catch (e) {
    console.log(e)
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let light = document.querySelector('.light');

light.addEventListener('click',function(){
    body.classList.toggle('lightmode');
    // document.getElementById('light').innerHTML = 'Sötét mód';
    localStorage.setItem("light",body.classList);
    document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Sötét Mód':'Világos Mód';
    // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
});
