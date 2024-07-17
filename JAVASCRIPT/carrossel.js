let cont = 1;

// Seleciona o primeiro radio button
document.getElementById('radio1').checked = true;

// Define um intervalo para alternar as imagens a cada 5 segundos
setInterval(() => {
    proximaImg();
}, 5000);

// Função para avançar para a próxima imagem
function proximaImg() {
    cont++;

    // Reinicia o contador se ultrapassar o número máximo de imagens
    if (cont > 4) {
        cont = 1;
    }

    // Seleciona o radio button correspondente à próxima imagem
    document.getElementById('radio' + cont).checked = true;
}
