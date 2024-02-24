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
    $teachers->username = $username;
    $teachers->position = $position;
    $teachers->login = $login;
    $teachers->password = $password;
    $teachers->type = $type;

    R::store($teachers);
}

header("Location: /teachers");
exit();