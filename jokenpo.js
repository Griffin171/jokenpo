var pontuacaoJogador = 0;
var pontuacaoComputador = 0;

function jogar() {
    var resultado;
    if (document.getElementById("pedra").checked == false && 
    document.getElementById("papel").checked == false && 
    document.getElementById("tesoura").checked == false) { 
        alert("Selecione uma opção!");
    } 
    else {
    //logica principal
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio) {
            case 0:
                document.getElementById("pc").src="imgspc/pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src="imgspc/pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src="imgspc/pctesoura.png";
                break;
            }
        if ((document.getElementById("pedra").checked == true && sorteio == 0) ||
        (document.getElementById("papel").checked == true && sorteio == 1) ||
        (document.getElementById("tesoura").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate";
            resultado = "empate";
        } 
        else if 
        ((document.getElementById("pedra").checked == true && sorteio == 2) ||
        (document.getElementById("papel").checked == true && sorteio == 0) ||
        (document.getElementById("tesoura").checked == true && sorteio == 1)) {
            document.getElementById("placar").innerHTML = "Jogador Venceu!";
            resultado = "vitoria";
            pontuacaoJogador++;
            document.getElementById("pontuacao-jogador").innerHTML = pontuacaoJogador;
        } 
        else {
            document.getElementById("placar").innerHTML = "Jogador Perdeu!";
            resultado = "derrota";
            pontuacaoComputador++;
            document.getElementById("pontuacao-computador").innerHTML = pontuacaoComputador;
        }
    }
}

function vermelho(){
    document.getElementById("body").style.backgroundColor = "#894649"
}
function azul(){
    document.getElementById("body").style.backgroundColor = "#495B7A"
}
function cinza(){
    document.getElementById("body").style.backgroundColor = "#2C2C2C"
}

function resetar() {
    document.getElementById("pc").src="imgspc/pc.png";
    document.getElementById("placar").innerHTML="";
}
