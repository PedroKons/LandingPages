
function animar() {
    const body = document.querySelector('body');
    const menuDiv = document.getElementById('menu-mobile');
    const btn = document.getElementById('btn-menu');
    menuDiv.classList.toggle('abrir');
    btn.classList.toggle('ativar');
    body.classList.toggle('menu-mobile-aberto');
    menuDiv.addEventListener('click', animar);
}

