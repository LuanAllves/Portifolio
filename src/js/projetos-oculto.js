var bnt = document.querySelector('#ocultar')
var container = document.querySelector('.projetos-ocultos')

bnt.addEventListener('click', function(){
    if(container.style.display === 'block') {
        container.style.display = 'none';
        bnt.setAttribute("src","./src/img/svg/abrir.svg")

    } else{
        container.style.display = 'block'
        bnt.setAttribute("src","./src/img/svg/ocultar.svg")
    }
});