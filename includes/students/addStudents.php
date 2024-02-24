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
    $students->username = $username;
    $students->numzachetka = $numzachetka;
    $students->groupname = $groupname;
    $students->subgroup = $subgroup;
    $students->login = $login;
    $students->password = $password;
    $students->type = $type;

    R::store($students);
}

header("Location: /students");
exit();