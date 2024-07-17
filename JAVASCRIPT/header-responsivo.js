// Função para alternar o menu overlay entre aberto e fechado
function toggleMenu() {
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
}

// Função para fechar o menu overlay
function fechar() {
    let overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
}


