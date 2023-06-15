var menuExp = document.querySelector('#menu');

var menuFecha = document.querySelector('#fechaMenu');

var menuLateral = document.querySelector('.menu-lateral');

menuExp.addEventListener('click', function(){
    menuLateral.classList.toggle('ativo');
})

menuFecha.addEventListener('click', function(){
    menuLateral.classList.remove('ativo');
})
