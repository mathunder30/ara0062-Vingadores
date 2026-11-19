# Eclipse: Fronteira Zero

Projeto da disciplina **ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP**, do Centro Universitário Newton Paiva.

## Sobre o projeto

Site conceitual de divulgação de **Eclipse: Fronteira Zero**, um RPG de ação sci-fi. A página apresenta a história do jogo, seu universo, personagens e edições, além de um formulário para cadastro de pessoas interessadas em receber novidades.

## Páginas e funcionalidades

- **Página inicial (`frontend/index.html`)** — apresentação do jogo, universo, personagens, edições e formulário de contato.
- **Página de registros (`frontend/registros.php`)** — lista os contatos salvos no MySQL, com nome, e-mail, interesse e data do cadastro.
- **Página do trabalho (`frontend/trabalho.html`)** — página complementar da atividade.

O formulário da página inicial valida os dados no navegador e no servidor. O PHP salva os contatos usando PDO; a página de registros consulta a tabela `contatos`.

## Tecnologias e recursos

- **HTML5** para a estrutura e o conteúdo das páginas.
- **CSS3** para a identidade visual e a responsividade.
- **JavaScript** para validar o formulário, abrir o modal com informações dos personagens e animar efeitos visuais.
- **PHP** para processar o formulário e persistir contatos usando PDO.
- **MySQL** para armazenar os contatos cadastrados.

## Estrutura do projeto

```text
.
├── README.md
├── backend/
│   ├── config/
│   │   └── conexao.php
│   ├── processa_contato.php
│   └── schema.sql
└── frontend/
    ├── index.html
    ├── registros.php
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

Os estilos principais ficam em `frontend/css/style.css`; a página de registros também usa `frontend/css/registros.css`. As imagens dos personagens ficam em `frontend/img/`, e o JavaScript em `frontend/js/script.js`.

## Como visualizar

1. Copie a pasta do projeto para `C:\xampp\htdocs\ara0062-Vingadores` (ou ajuste as URLs abaixo ao nome da pasta usada dentro de `htdocs`).
2. No XAMPP Control Panel, inicie **Apache** e **MySQL**.
3. No phpMyAdmin (`http://localhost/phpmyadmin`), importe `backend/schema.sql`. Ele cria o banco `eclipse` e a tabela `contatos`.
4. Na configuração padrão do XAMPP, a conexão usa `127.0.0.1:3306`, banco `eclipse`, usuário `root` e senha vazia. A aplicação também aceita as variáveis de ambiente `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` e `DB_PASSWORD`. Se alterar as credenciais, configure-as no ambiente disponível ao Apache e reinicie o serviço. Não salve senhas no repositório.
5. Abra `http://localhost/ara0062-Vingadores/frontend/index.html`. Depois de enviar o formulário, veja os cadastros em `http://localhost/ara0062-Vingadores/frontend/registros.php`.

> O formulário e a listagem precisam ser acessados pelo Apache; abrir os arquivos diretamente ou usar o Live Server não executa PHP. O PHP precisa ter PDO, PDO MySQL e `mbstring` habilitados.
>
> A listagem exibe nomes e e-mails cadastrados. Mantenha o acesso local e não publique essa página sem implementar controles de acesso adequados.

## Equipe

**Líder:** Mateus Teixeira Lopes

| Nome completo | Matrícula | GitHub | Responsabilidade |
|---|---:|---|---|
| Mateus Teixeira Lopes | 202508491028 | [@mathunder30](https://github.com/mathunder30) | Líder; página inicial e marcação HTML da listagem; estilização CSS |
| Theo Alvarenga Torres Dias | 202603008576 | [@theosistemas](https://github.com/theosistemas) | Arquivos PHP `conexao.php` e `processa_contato.php` |
| Gustavo Ferreira Rocha | 202603567681 | [@gustavof006](https://github.com/gustavof006) | JavaScript (`script.js`) |
| Mateus Bueno Martins Marques | 202602794578 | [@mateusbueno10](https://github.com/mateusbueno10) | Integrante |
| Igor Pereira Rios | 202602605023 | [@igorpereirarios-ux](https://github.com/igorpereirarios-ux) | Integrante |
