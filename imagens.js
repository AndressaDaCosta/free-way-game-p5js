// Códigos de Imagens e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somPontos;
let somColisao;

function preload(){

    imagemDaEstrada = loadImage("Imagens/estrada.png");

    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro = loadImage("Imagens/carro-1.png");
    imagemCarro2= loadImage("Imagens/carro-2.png");
    imagemCarro3= loadImage("Imagens/carro-3.png");

    imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
  
    somDaTrilha = loadSound("sons/trilha.mp3");
    somPontos = loadSound("sons/pontos.wav");
    somColisao = loadSound("sons/colidiu.mp3");
  
  
}