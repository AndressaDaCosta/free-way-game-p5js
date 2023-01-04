//códigos do Ator  


let yAtor = 370;
let xAtor = 87;  

let colisao = false;
let meusPontos = 0;

function mostraAtor () {
  image(imagemDoAtor,xAtor,yAtor,25,25);
    //print(yAtor)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
  yAtor -=3;
  }
  
   if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
  yAtor +=3;
   
    }
  }
}

function limiteTelaAtor () {
  if(yAtor < 3){
    yAtor = 4;
  }
  if(yAtor >370){
    yAtor = 370;
  }
}
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao() {
    for ( let i = 0; i < imagemCarros.length; i++ ) {
          colisao = collideRectCircle(xCarros[i],yCarros[i],
                      comprimentoCarro,alturaCarro,xAtor,yAtor,15);
        if (colisao) {
          somColisao.play();
            voltaAtorPosicaoInicial()
          if(pontosMaiorQueZero()) {
            meusPontos -= 1;
         }
      }
   }
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function mostraPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,255));
  text(meusPontos, width/5 ,27 )
  
}

function marcaPontos() {
  if(yAtor < 15) {
    meusPontos += 1;
    somPontos.play();
    voltaAtorPosicaoInicial();
  }
}  

function podeSeMover() {
  return yAtor < 366;
}


