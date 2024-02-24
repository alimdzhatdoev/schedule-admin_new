<?php
require '../include.php';

$auditorium_number = $_POST['auditorium'];

$auditoriumSearch = R::findOne('auditorium', 'number = ?', [$auditorium_number]);

if (!$auditoriumSearch) {
    $auditorium = R::dispense('auditorium');
    $auditorium->number = $auditorium_number;

    R::store($auditorium);
}

header("Location: /auditorium");
exit();