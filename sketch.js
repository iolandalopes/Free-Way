function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
 background(imagemDaEstrada);
  mostraAtor();
  mostraCArro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}
 


