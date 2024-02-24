<?php
require '../include.php';

$number = $_POST['number'];

$auditorium = R::findOne('auditorium', 'number = ?', [$number]);

if ($auditorium) {
    R::trash($auditorium);
}
