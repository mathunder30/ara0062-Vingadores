

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




//VALIDAÇÃO DO FORMULÁRIO COM O JS


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const interesse = document.querySelector("#interesse");
    const consentimento = form.querySelector('input[type="checkbox"]');

    // Exibe mensagem de erro
    function mostrarErro(campo, mensagem) {
        limparErro(campo);

        const erro = document.createElement("small");
        erro.className = "mensagem-erro";
        erro.textContent = mensagem;

        campo.classList.add("campo-invalido");
        campo.insertAdjacentElement("afterend", erro);
    }

    // Remove mensagem de erro
    function limparErro(campo) {
        campo.classList.remove("campo-invalido");

        const proximo = campo.nextElementSibling;

        if (proximo && proximo.classList.contains("mensagem-erro")) {
            proximo.remove();
        }
    }

    // Validação do nome
    function validarNome() {
        const valor = nome.value.trim();

        if (valor === "") {
            mostrarErro(nome, "Informe seu nome.");
            return false;
        }

        if (valor.length < 3) {
            mostrarErro(nome, "O nome deve ter pelo menos 3 caracteres.");
            return false;
        }

        if (!/^[\p{L}\s'-]+$/u.test(valor)) {
            mostrarErro(nome, "Digite um nome válido.");
            return false;
        }

        limparErro(nome);
        return true;
    }

    // Validação do e-mail
    function validarEmail() {
        const valor = email.value.trim();

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (valor === "") {
            mostrarErro(email, "Informe seu e-mail.");
            return false;
        }

        if (!regexEmail.test(valor)) {
            mostrarErro(email, "Digite um endereço de e-mail válido.");
            return false;
        }

        limparErro(email);
        return true;
    }

    // Validação do interesse
    function validarInteresse() {
        if (interesse.value === "") {
            mostrarErro(interesse, "Selecione uma opção.");
            return false;
        }

        limparErro(interesse);
        return true;
    }

    // Validação do consentimento
    function validarConsentimento() {
        limparErro(consentimento);

        if (!consentimento.checked) {
            mostrarErro(
                consentimento,
                "É necessário concordar para continuar."
            );
            return false;
        }

        return true;
    }

    // Validação em tempo real
    nome.addEventListener("input", validarNome);
    email.addEventListener("input", validarEmail);
    interesse.addEventListener("change", validarInteresse);

    consentimento.addEventListener("change", () => {
        validarConsentimento();
    });

    // Validação antes do envio
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeValido = validarNome();
        const emailValido = validarEmail();
        const interesseValido = validarInteresse();
        const consentimentoValido = validarConsentimento();

        if (
            nomeValido &&
            emailValido &&
            interesseValido &&
            consentimentoValido
        ) {
            alert("Transmissão recebida! Você entrou no radar de Eclipse.");

            form.reset();

            // Limpa eventuais mensagens de erro
            [nome, email, interesse, consentimento].forEach(campo => {
                limparErro(campo);
            });
        } else {
            const primeiroErro = form.querySelector(".campo-invalido");

            if (primeiroErro) {
                primeiroErro.focus();
            }
        }
    });
});
