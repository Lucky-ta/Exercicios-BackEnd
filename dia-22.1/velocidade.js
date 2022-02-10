const readLine = require('readline-sync');

const { questionInt } = readLine;

function calculaVelocidadeMedia(){
    const velocidade = questionInt('Qual a distancia percorrida? (metros) ');
    const tempo = questionInt('Em quanto tempo? (segundos) ');

    const velocidadeMedia = (velocidade / tempo).toFixed(2);

    console.log(velocidadeMedia);
}

calculaVelocidadeMedia();
