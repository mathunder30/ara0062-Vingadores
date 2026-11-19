<?php

function redirecionar(string $resultado): never
{
	header('Location: ../frontend/index.html?contato=' . $resultado . '#contato');
	exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	header('Allow: POST');
	exit('Método não permitido.');
}

$nome = trim((string) ($_POST['nome'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$interesse = (string) ($_POST['interesse'] ?? '');
$consentimento = ($_POST['consentimento'] ?? '') === '1';
$interessesValidos = ['novidades', 'lancamento', 'universo'];

if (
	mb_strlen($nome) < 3 ||
	mb_strlen($nome) > 120 ||
	!filter_var($email, FILTER_VALIDATE_EMAIL) ||
	strlen($email) > 254 ||
	!in_array($interesse, $interessesValidos, true) ||
	!$consentimento
) {
	redirecionar('erro');
}

try {
	require __DIR__ . '/config/conexao.php';

	$comando = $conexao->prepare(
		'INSERT INTO contatos (nome, email, interesse, consentimento)
		 VALUES (:nome, :email, :interesse, :consentimento)'
	);
	$comando->execute([
		':nome' => $nome,
		':email' => $email,
		':interesse' => $interesse,
		':consentimento' => 1,
	]);

	redirecionar('sucesso');
} catch (Throwable $erro) {
	error_log('Falha ao salvar contato: ' . $erro->getMessage());
	redirecionar('erro');
}
