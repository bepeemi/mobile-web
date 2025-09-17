const imagens = ["../../img/bannerjs-1000x250.jpg", "../../img/bannerjs1-1000x250.jpg", "../../img/banner-2.jpg"];

let index = 0; // começa na primeira imagem
const banner = document.getElementById("banner");
function trocarImagem(){
index++; //vai para próxima imagem 
if (index >= imagens.length){
    index = 0; // se passou do último, retorna ao primeiro
}

banner.src = imagens [index];

}
//trocarImagem();
setInterval(trocarImagem, 3000);