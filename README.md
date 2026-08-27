Equipe Vingadores — Game Studio

Projeto da disciplina ARA0062 · Desenvolvimento Web em HTML5, CSS, JavaScript e PHP — Centro Universitário Newton Paiva, 2026/2.

Tema do projeto

Site de uma empresa fictícia de desenvolvimento de jogos. O projeto tem como objetivo apresentar a equipe como um estúdio de desenvolvimento de games, divulgando seus jogos, projetos e informações relacionadas ao universo dos games.

Equipe

Líder: Mateus Teixeira Lopes

Nome completo	Matrícula	GitHub	Papel
Theo Alvarenga Torres Dias	202603008576	@theosistemas	integrante
Gustavo Ferreira Rocha	202603567681	@gustavof006	integrante
Mateus Teixeira Lopes	202508491028	@mathunder30	líder
Mateus Bueno Martins Marques	202602794578	@mateusbueno10	integrante
Igor Pereira Rios	202602605023	@igorpereirarios-ux	integrante

Cada integrante acrescenta a sua própria linha nesta tabela, pelo GitHub. Esse é o commit que registra a sua participação.

Estrutura do projeto

Estrutura obrigatória da disciplina. Não renomeie pastas nem arquivos.

O projeto é separado em duas metades: frontend/ guarda o que roda no navegador (HTML, CSS, JavaScript e imagens) e backend/ guarda o que roda no servidor (PHP).

.
├─ README.md
├─ frontend/
│   ├─ index.html
│   ├─ css/
│   │   └─ estilo.css
│   ├─ js/
│   │   └─ script.js
│   └─ img/
│       └─ .gitkeep
└─ backend/
    ├─ config/
    │   └─ conexao.php
    └─ processa-contato.php

Os dois arquivos .php começam vazios, só com um comentário dentro. Eles existem desde já para que o lugar do código de servidor esteja combinado quando o PHP chegar.

Como abrir o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta no VS Code (Arquivo → Abrir Pasta).
3. Abra frontend/index.html.
4. Clique em Go Live utilizando a extensão Live Server.

Como o index.html está dentro de frontend/, os caminhos dele ficam assim:

Para chegar em	Escreva no index.html
Folha de estilos	css/estilo.css
Script	js/script.js
Imagem	img/foto.jpg
Arquivo do backend	../backend/processa-contato.php

Os dois pontos (..) sobem uma pasta: saem do frontend/ antes de entrar no backend/.

Andamento por ciclo

* Ciclo 3 — repositório, equipe e estrutura do projeto
* Ciclo 3 — frontend/: página com listas, tabela e formulário de contato
* Ciclos 4 e 5 — frontend/css/: identidade visual, layout e responsividade
* Ciclos 6 e 7 — frontend/js/: interação, validação e dados via JSON
* Ciclos 8 a 10 — backend/: formulário que grava e lista do banco