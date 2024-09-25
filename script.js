//Váriaveis
let deitado;
let imagem = document.querySelector('#imagem')

// Verificar orientação da tela
function verificarOrientacao() {
    if (window.matchMedia("(orientation: portrait)").matches) {

      return false;
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      return true;
    }
  }

function verificOrient(){
    deitado = verificarOrientacao();
    if(deitado == false){
        imagem.src = 'Erro paisagem.png'
    }else{
        imagem.src = 'teste.png'
    }
}


setInterval(verificOrient, 1000)
  