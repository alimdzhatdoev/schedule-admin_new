<?php
require '../include.php';

$student = $_POST['student'];

$students = R::findOne('students', 'username = ?', [$student]);

if ($students) {
    R::trash($students);
}
