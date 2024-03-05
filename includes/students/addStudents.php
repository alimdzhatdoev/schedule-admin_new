<?php
require '../include.php';

$username = $_POST['username'];
$numzachetka = $_POST['numzachetka'];
$groupname = $_POST['groupname'];
$subgroup = $_POST['subgroup'];
$login = $_POST['login'];
$password = $_POST['password'];
$type = $_POST['type'];

$studentsSearch = R::findOne('students', 'username = ?', [$login]);

if (!$studentsSearch) {
    $students = R::dispense('students');
    $students->username = trim($username);
    $students->numzachetka = trim($numzachetka);
    $students->groupname = trim($groupname);
    $students->subgroup = trim($subgroup);
    $students->login = trim($login);
    $students->password = trim($password);
    $students->type = trim($type);

    R::store($students);
}

header("Location: /students");
exit();