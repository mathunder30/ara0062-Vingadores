<?php

$host = getenv('DB_HOST') ?: '127.0.0.1';
$porta = getenv('DB_PORT') ?: '3306';
$banco = getenv('DB_NAME') ?: 'eclipse';
$usuario = getenv('DB_USER') ?: 'root';
$senha = getenv('DB_PASSWORD') ?: '';

$dsn = "mysql:host={$host};port={$porta};dbname={$banco};charset=utf8mb4";

$conexao = new PDO($dsn, $usuario, $senha, [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES => false,
]);
