

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








document.addEventListener("DOMContentLoaded", function () {

    // Elementos do modal
    const modal = document.getElementById("characterModal");
    const fechar = document.getElementById("closeModal");

    const modalNumero = document.getElementById("modalNumero");
    const modalNome = document.getElementById("modalNome");
    const modalFuncao = document.getElementById("modalFuncao");
    const modalDescricao = document.getElementById("modalDescricao");
    const modalHabilidade = document.getElementById("modalHabilidade");

    // Banco de dados dos personagens
    const personagens = {

        "card-kael": {
            
            nome: "KAEL VENN",
            funcao: "O EXPLORADOR",
            descricao: "Kael é um explorador marcado por uma tecnologia misteriosa que ninguém consegue compreender. Sua jornada começa quando descobre que sua marca está conectada à anomalia que ameaça o planeta.",
            habilidade: "MARCA DA ANOMALIA — Permite detectar e interagir com tecnologias desconhecidas."
        },

        "card-nyra": {
           
            nome: "NYRA SOL",
            funcao: "A FORASTEIRA",
            descricao: "Nyra é uma viajante misteriosa que conhece os territórios além dos muros de Véspera. Sua ligação com máquinas e inteligências artificiais pode revelar segredos esquecidos da humanidade.",
            habilidade: "INTERFACE NEURAL — Permite estabelecer comunicação com sistemas tecnológicos."
        },

        "card-orin": {
            
            nome: "ORIN VALE",
            funcao: "O SENTINELA",
            descricao: "Orin é um dos últimos guardiões de uma antiga ordem responsável por proteger Véspera. Seu passado está diretamente ligado aos segredos da fronteira e à sobrevivência da humanidade.",
            habilidade: "ESCUDO DE VANGUARDA — Utiliza tecnologia defensiva para proteger a si mesmo e seus aliados."
        }

    };

    // Seleciona os cards
    const cards = document.querySelectorAll(".character");

    // Evento de clique nos personagens
    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            // Descobre qual personagem foi selecionado
            const classe = Object.keys(personagens).find(function (chave) {
                return card.classList.contains(chave);
            });

            if (!classe) return;

            const personagem = personagens[classe];

            // Atualiza as informações do modal
            modalNumero.textContent = personagem.numero;
            modalNome.textContent = personagem.nome;
            modalFuncao.textContent = personagem.funcao;
            modalDescricao.textContent = personagem.descricao;
            modalHabilidade.textContent = personagem.habilidade;

            // Abre o modal
            modal.classList.add("active");

            // Impede a rolagem da página
            document.body.style.overflow = "hidden";

            fechar.focus();

        });

    });

    // Função para fechar o modal
    function fecharModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

    // Fechar pelo botão X
    fechar.addEventListener("click", fecharModal);

    // Fechar clicando fora do conteúdo
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            fecharModal();
        }

    });

    // Fechar pressionando ESC
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && modal.classList.contains("active")) {
            fecharModal();
        }

    });

});






/* ===================================
   ECLIPSE - EFEITO DE PARTICULAS
=================================== */

(() => {

    const canvas = document.createElement("canvas");
    canvas.id = "particle-canvas";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let largura;
    let altura;
    let particulas = [];

    // Configurações
    const quantidade = 100;
    const cores = [
        "rgba(255, 255, 255, 0.7)",
        "rgba(190, 45, 45, 0.8)",
        "rgba(160, 160, 180, 0.6)"
    ];

    // Ajusta o tamanho do canvas
    function redimensionar() {

        const escala = Math.min(window.devicePixelRatio || 1, 2);

        largura = window.innerWidth;
        altura = window.innerHeight;

        canvas.width = largura * escala;
        canvas.height = altura * escala;

        ctx.setTransform(escala, 0, 0, escala, 0, 0);

    }

    // Cria uma partícula
    function criarParticula() {

        return {
            x: Math.random() * largura,
            y: Math.random() * altura,
            tamanho: Math.random() * 2.5 + 0.5,
            velocidade: Math.random() * 1.2 + 0.3,
            movimento: Math.random() * 0.8 - 0.4,
            opacidade: Math.random() * 0.6 + 0.2,
            cor: cores[Math.floor(Math.random() * cores.length)]
        };

    }

    // Inicializa as partículas
    function iniciar() {

        particulas = [];

        for (let i = 0; i < quantidade; i++) {
            particulas.push(criarParticula());
        }

    }

    // Desenha as partículas
    function desenhar() {

        ctx.clearRect(0, 0, largura, altura);

        particulas.forEach((p) => {

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.tamanho,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = p.cor;
            ctx.globalAlpha = p.opacidade;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.cor;
            ctx.fill();

            // Movimento de queda
            p.y += p.velocidade;
            p.x += p.movimento;

            // Pequena variação de movimento
            p.x += Math.sin(p.y * 0.01) * 0.2;

            // Quando sair da tela, reaparece no topo
            if (p.y > altura + 10) {

                p.y = -10;
                p.x = Math.random() * largura;

            }

            // Reaparece nas laterais
            if (p.x > largura + 10) p.x = -10;
            if (p.x < -10) p.x = largura + 10;

        });

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        requestAnimationFrame(desenhar);

    }

    // Redimensionamento da tela
    window.addEventListener("resize", () => {

        redimensionar();
        iniciar();

    });

    // Respeita a preferência por movimento reduzido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    redimensionar();
    iniciar();
    desenhar();

})();


