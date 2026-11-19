<?php

// Envia a pessoa de volta ao formulário com o resultado do processamento.
function redirecionar(string $resultado): void
{
	header('Location: ../frontend/index.html?contato=' . $resultado . '#contato');
	exit;
}

// Aceita somente envios feitos pelo formulário usando o método POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	header('Allow: POST');
	exit('Método não permitido.');
}

// Lê os campos enviados e remove espaços extras dos valores textuais.
$nome = trim((string) ($_POST['nome'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$interesse = (string) ($_POST['interesse'] ?? '');
$consentimento = ($_POST['consentimento'] ?? '') === '1';

// Mantém uma lista permitida para impedir valores de interesse inesperados.
$interessesValidos = ['novidades', 'lancamento', 'universo'];

// Confere os mesmos requisitos no servidor, sem depender da validação do navegador.
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

// Conecta ao banco, prepara a inserção e grava os dados com parâmetros seguros.
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

	// Sinaliza que o cadastro foi salvo com sucesso.
	redirecionar('sucesso');
} catch (Throwable $erro) {
	// Registra o detalhe técnico no log e mostra uma mensagem genérica ao visitante.
	error_log('Falha ao salvar contato: ' . $erro->getMessage());
	redirecionar('erro');
}
