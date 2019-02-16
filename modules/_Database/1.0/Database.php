<?php

$host = $config['db']['host'];
$db = $config['db']['db'];
$user = $config['db']['user'];
$pass = $config['db']['password'];
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $opt);
} catch (PDOException $e) {
    die('Подключение не удалось: ' . $e->getMessage());
}

function query(String $query, Array $params = null, int $type_query = 1)
{
    global $pdo;

    try {

        $stmt = $pdo->prepare($query);
        $result = $stmt->execute($params);
        $data['data'] = $stmt->fetchAll();
        $data['result'] = 1;

    } catch (PDOException $e) {
        $data['result'] = 0;
        $data['error'] = $e->getMessage();
    }



    return $data;


//    $stmt = $pdo->prepare('SELECT name FROM users WHERE email = :email');
//    $stmt->execute(array('email' => $email));

}
