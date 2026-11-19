# Eclipse: Fronteira Zero

Projeto da disciplina **ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP**, do Centro Universitário Newton Paiva.

## Sobre o projeto

Site conceitual de divulgação de **Eclipse: Fronteira Zero**, um RPG de ação sci-fi. A página apresenta a história do jogo, seu universo, personagens e edições, além de um formulário demonstrativo para quem deseja receber novidades.

## Páginas

- **Página inicial (`frontend/index.html`)** — apresentação do jogo, universo, personagens, edições e formulário de contato.
- **Listagem de contatos (`frontend/registros.html`)** — tabela responsiva com exemplos fictícios de pessoas interessadas em receber novidades.

O formulário possui validação no navegador com JavaScript, mas ainda não envia nem armazena os dados. Da mesma forma, a página de registros usa conteúdo estático de demonstração; não há integração com PHP ou banco de dados nesta etapa.

## Tecnologias e recursos

- **HTML5** para a estrutura e o conteúdo das páginas.
- **CSS3** para a identidade visual e a responsividade.
- **JavaScript** para validar o formulário, exibir informações dos personagens e animar efeitos visuais.
- **PHP** previsto para uma etapa futura; os arquivos do backend ainda não implementam processamento ou conexão com banco de dados.

## Estrutura do projeto

```text
.
├── README.md
├── backend/
│   ├── config/
│   │   └── conexao.php
│   └── processa_contato.php
└── frontend/
    ├── index.html
    ├── registros.html
    ├── form.html
    ├── trabalho.html
    ├── css/
    │   ├── style.css
    │   └── registros.css
    ├── js/
    │   └── script.js
    └── img/
        ├── kevin.png
        ├── nyra.png
        └── orin.png
```

`form.html` e `trabalho.html` são páginas adicionais do projeto. Os estilos principais do site ficam em `frontend/css/style.css`; a página de registros complementa esses estilos com `frontend/css/registros.css`.

## Como visualizar

1. Abra a pasta do projeto no VS Code.
2. Abra `frontend/index.html` e inicie o **Live Server**.
3. Para visualizar a tabela de demonstração, acesse `frontend/registros.html` pelo mesmo servidor.

> O Live Server exibe as páginas estáticas, mas não executa PHP. A integração do backend e do banco de dados será feita posteriormente.

## Equipe

**Líder:** Mateus Teixeira Lopes

| Nome completo | Matrícula | GitHub | Responsabilidade |
|---|---:|---|---|
| Mateus Teixeira Lopes | 202508491028 | [@mathunder30](https://github.com/mathunder30) | Líder; páginas HTML `index.html` e `registros.html`; estilização CSS |
| Theo Alvarenga Torres Dias | 202603008576 | [@theosistemas](https://github.com/theosistemas) | Arquivos PHP `conexao.php` e `processa_contato.php` |
| Gustavo Ferreira Rocha | 202603567681 | [@gustavof006](https://github.com/gustavof006) | JavaScript (`script.js`) |
| Mateus Bueno Martins Marques | 202602794578 | [@mateusbueno10](https://github.com/mateusbueno10) | Integrante |
| Igor Pereira Rios | 202602605023 | [@igorpereirarios-ux](https://github.com/igorpereirarios-ux) | Integrante |
