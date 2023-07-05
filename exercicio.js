const lista = document.querySelector('ul')

document.querySelector('#abrir').addEventListener('click', ()=>lista.setAttribute('data-lista', "mostrar"))

document.querySelector('.fechar').addEventListener('click', ()=>lista.setAttribute('data-lista', "esconder"))