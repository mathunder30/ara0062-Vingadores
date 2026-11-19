<?php
$erroCarregamento = false;
$contatos = [];
$rotulosInteresse = [
	'novidades' => 'Novidades do jogo',
	'lancamento' => 'Aviso de lançamento',
	'universo' => 'Histórias do universo',
];

try {
	require __DIR__ . '/../backend/config/conexao.php';
	$consulta = $conexao->query(
		"SELECT id, nome, email, interesse,
			DATE_FORMAT(criado_em, '%d/%m/%Y %H:%i') AS data_formatada
		 FROM contatos
		 ORDER BY criado_em DESC, id DESC"
	);
	$contatos = $consulta->fetchAll();
} catch (PDOException $erro) {
	error_log('Falha ao carregar contatos: ' . $erro->getMessage());
	http_response_code(500);
	$erroCarregamento = true;
}

function escaparHtml(string $valor): string
{
	return htmlspecialchars($valor, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
?>
<!doctype html>
<html lang="pt-BR">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0b0c10">
  <meta name="description" content="Contatos cadastrados para receber novidades sobre Eclipse: Fronteira Zero.">
  <title>CONTATOS — Eclipse: Fronteira Zero</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/registros.css">
</head>

<body class="records-page">
  <header class="topbar">
    <a class="brand" href="index.html#inicio" aria-label="Eclipse, início">
      <span class="brand-mark">E</span><span>ECLIPSE<small>FRONTEIRA ZERO</small></span>
    </a>
    <nav aria-label="Navegação principal">
      <a href="index.html#jogo">O jogo</a>
      <a href="index.html#universo">Universo</a>
      <a href="index.html#personagens">Personagens</a>
      <a href="index.html#edicoes">Edições</a>
    </nav>
    <a class="nav-cta" href="index.html#contato">Entre no radar <span>↗</span></a>
  </header>

  <main class="records-main">
    <section class="records-section" aria-labelledby="records-title">
      <div class="section-label">
        <span>06 / CONTATOS</span><i></i><span>ARQUIVO DE TRANSMISSÕES</span>
      </div>

      <div class="records-heading">
        <div>
          <p class="eyebrow"><span class="pulse"></span> LISTA DE CONTATOS</p>
          <h1 id="records-title">INTERESSADOS<br>NO <em>RADAR.</em></h1>
        </div>
        <p class="records-description">
          Registros de pessoas que querem receber novidades sobre o jogo, seu lançamento e o universo de Eclipse.
        </p>
      </div>

      <div class="records-meta">
        <span><span class="status-dot"></span>
          <?= $erroCarregamento ? 'NÃO FOI POSSÍVEL ACESSAR O BANCO' : 'REGISTROS DO BANCO LOCAL' ?>
        </span>
        <span><?= $erroCarregamento ? '—' : sprintf('%02d', count($contatos)) ?> CONTATOS</span>
      </div>

      <div class="table-scroll" role="region" aria-label="Tabela de contatos cadastrados" tabindex="0">
        <table class="records-table">
          <caption>Contatos interessados em receber novidades de Eclipse: Fronteira Zero</caption>
          <thead>
            <tr>
              <th scope="col">NOME</th>
              <th scope="col">E-MAIL</th>
              <th scope="col">INTERESSE</th>
              <th scope="col">DATA DE CADASTRO</th>
            </tr>
          </thead>
          <tbody>
            <?php if ($erroCarregamento): ?>
              <tr><td class="records-empty" colspan="4">Não foi possível carregar os contatos. Verifique as credenciais do banco, se o MySQL está iniciado e se o arquivo schema.sql foi importado.</td></tr>
            <?php elseif (count($contatos) === 0): ?>
              <tr><td class="records-empty" colspan="4">Ainda não há contatos cadastrados.</td></tr>
            <?php else: ?>
              <?php foreach ($contatos as $indice => $contato): ?>
                <tr>
                  <td data-label="Nome"><span class="record-index"><?= sprintf('%02d', $indice + 1) ?></span> <?= escaparHtml((string) $contato['nome']) ?></td>
                  <td data-label="E-mail"><?= escaparHtml((string) $contato['email']) ?></td>
                  <td data-label="Interesse"><span class="interest-tag"><?= escaparHtml($rotulosInteresse[$contato['interesse']] ?? 'Outro') ?></span></td>
                  <td data-label="Data de cadastro"><?= escaparHtml((string) $contato['data_formatada']) ?></td>
                </tr>
              <?php endforeach; ?>
            <?php endif; ?>
          </tbody>
        </table>
      </div>

      <p class="records-note">Os contatos são carregados do banco de dados local.</p>
      <a class="under-link" href="index.html#inicio">Voltar para o início <span>↗</span></a>
    </section>
  </main>

  <footer class="footer">
    <a class="brand" href="index.html#inicio">
      <span class="brand-mark">E</span><span>ECLIPSE<small>FRONTEIRA ZERO</small></span>
    </a>
    <p>UM MUNDO NO LIMITE.<br>UMA ESCOLHA MUDA TUDO.</p>
    <div class="footer-links">
      <a href="index.html#jogo">O jogo</a>
      <a href="index.html#personagens">Personagens</a>
      <a href="index.html#contato">Contato</a>
      <a href="registros.php">Registros</a>
    </div>
    <span class="copyright">© 2026 ORBITAL FORGE. PROJETO CONCEITUAL.</span>
  </footer>
</body>

</html>
