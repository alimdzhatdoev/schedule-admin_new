<?php
require '../include.php';

$auditorium = R::findAll('auditorium');

$auditoriumData = array();

foreach($auditorium as $data) {
    array_push($auditoriumData, $data->number);
}

R::close();

$jsonData = json_encode($auditoriumData);

echo $jsonData;