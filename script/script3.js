let numeroImagem = 0;

function openVideoPopup() {
    document.getElementById('videoPopup').style.display = 'flex';
}

function closeVideoPopup() {
    document.getElementById('videoPopup').style.display = 'none';
    
   
    var iframe = document.getElementById('youtubeIframe');
    iframe.src = iframe.src; 
}

function fecharPopupImagem(){
    document.getElementById('popup-imagens').style.display = 'none';
}

function abripopupImagem(id){
    document.getElementById('popup-imagens').style.display = 'flex';
    numeroImagem = id;
    let caminhoImagem = "imagens/galeria/gallery-image-" + numeroImagem + "-small.webp";
    const imagem = document.querySelector("#popup-imagens img");
    imagem.src = caminhoImagem;
    imagem.alt = "Imagem " + numeroImagem;

}


function voltarImagem(){
    numeroImagem -= 1;
    if(numeroImagem<1){
        numeroImagem = 6;
    }
    let caminhoImagem = "imagens/galeria/gallery-image-" + numeroImagem + "-small.webp";
    const imagem = document.querySelector("#popup-imagens img");
    imagem.src = caminhoImagem;
    imagem.alt = "Imagem " + numeroImagem;
    imagem.style.width = "auto";
    imagem.style.maxWidth = "60%";


}



function avancarImagem(){
    numeroImagem += 1;
    if(numeroImagem>6){
        numeroImagem = 1;
    }
    let caminhoImagem = "imagens/galeria/gallery-image-" + numeroImagem + "-small.webp";
    const imagem = document.querySelector("#popup-imagens img");
    imagem.src = caminhoImagem;
    imagem.alt = "Imagem " + numeroImagem;
    
    imagem.style.width = "auto";
    imagem.style.height = "60%";


}







window.onclick = function(event) {
    var popup = document.getElementById('videoPopup');
    var  popimag =  document.getElementById('popup-imagens');
    if (event.target == popup) {
        closeVideoPopup();
    }

    if (event.target == popimag) {
        fecharPopupImagem();
    }
}