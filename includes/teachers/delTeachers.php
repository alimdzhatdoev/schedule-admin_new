<?php
require '../include.php';

$teacher = $_POST['teacher'];

$teachers = R::findOne('teachers', 'username = ?', [$teacher]);

if ($teachers) {
    R::trash($teachers);
}
