<?php
require '../include.php';

$username = $_POST['username'];
$position = $_POST['position'];
$login = $_POST['login'];
$password = $_POST['password'];
$type = $_POST['type'];

$teachersSearch = R::findOne('teachers', 'username = ?', [$login]);

if (!$teachersSearch) {
    $teachers = R::dispense('teachers');
    $teachers->username = trim($username);
    $teachers->position = trim($position);
    $teachers->login = trim($login);
    $teachers->password = trim($password);
    $teachers->type = trim($type);

    R::store($teachers);
}

header("Location: /teachers");
exit();