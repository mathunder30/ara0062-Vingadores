# Eclipse: Fronteira Zero

Projeto da disciplina **ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP**, do Centro Universitário Newton Paiva.

## Sobre o projeto

Site conceitual de divulgação de **Eclipse: Fronteira Zero**, um RPG de ação sci-fi. A página apresenta a história do jogo, seu universo, personagens e edições, além de um formulário para cadastro de pessoas interessadas em receber novidades.

## Páginas

- **Página inicial (`frontend/index.html`)** — apresentação do jogo, universo, personagens, edições e formulário de contato.
- **Listagem de contatos (`frontend/registros.php`)** — tabela responsiva com registros carregados do banco MySQL local.

O formulário valida os campos no navegador e no PHP e salva os contatos em uma tabela MySQL.

## Tecnologias e recursos

- **HTML5** para a estrutura e o conteúdo das páginas.
- **CSS3** para a identidade visual e a responsividade.
- **JavaScript** para validar o formulário, exibir informações dos personagens e animar efeitos visuais.
- **PHP** para processar o formulário e persistir contatos usando PDO.
- **MySQL** para armazenar os contatos cadastrados.

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
    ├── registros.php
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

1. Coloque a pasta do projeto dentro de `C:\xampp\htdocs` (por exemplo, `C:\xampp\htdocs\ara0062-Vingadores`).
2. No XAMPP Control Panel, inicie **Apache** e **MySQL**.
3. Abra `http://localhost/phpmyadmin`, selecione **Importar** e importe `backend/schema.sql` para criar o banco `eclipse` e a tabela `contatos`.
4. A conexão usa as variáveis de ambiente `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` e `DB_PASSWORD`. No XAMPP padrão, host `127.0.0.1`, porta `3306`, banco `eclipse`, usuário `root` e senha vazia. Se o MySQL tiver senha, configure `DB_USER` e `DB_PASSWORD` nas variáveis do Windows acessíveis ao Apache e reinicie o Apache. Não coloque senhas no repositório.
5. Acesse `http://localhost/ara0062-Vingadores/frontend/index.html`, envie o formulário e consulte os dados em `http://localhost/ara0062-Vingadores/frontend/registros.php`.

> O formulário e a listagem precisam ser acessados pelo Apache; abrir os arquivos diretamente ou usar o Live Server não executa PHP.
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
