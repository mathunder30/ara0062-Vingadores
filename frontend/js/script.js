

// Zoom nas imagens dos personagens usando javascript
// Seleciona todas as imagens dos personagens
const imagens = document.querySelectorAll(".portrait-image");

// Percorre todas as imagens
imagens.forEach((imagem) => {

  // Quando o mouse entrar na imagem
  imagem.addEventListener("mouseenter", () => {
    imagem.style.transform = "scale(1.1)";
    imagem.style.filter = "brightness(1.2)";
    imagem.style.transition = "0.5s ease";
  });

  // Quando o mouse sair da imagem
  imagem.addEventListener("mouseleave", () => {
    imagem.style.transform = "scale(1)";
    imagem.style.filter = "brightness(1)";
  });

});
