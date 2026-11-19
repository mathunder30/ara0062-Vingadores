<?php

// Lê as configurações do banco do ambiente ou usa os valores padrão do XAMPP.
$host = getenv('DB_HOST') ?: '127.0.0.1';
$porta = getenv('DB_PORT') ?: '3306';
$banco = getenv('DB_NAME') ?: 'eclipse';
$usuario = getenv('DB_USER') ?: 'root';
$senha = getenv('DB_PASSWORD') ?: '';

// Define o endereço do MySQL e solicita comunicação de texto em UTF-8.
$dsn = "mysql:host={$host};port={$porta};dbname={$banco};charset=utf8mb4";

// Cria a conexão PDO e configura erros como exceções, resultados associativos
// e consultas preparadas nativas do MySQL.
$conexao = new PDO($dsn, $usuario, $senha, [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES => false,
]);
