<?php
require '../include.php';

$teachers = R::findAll('teachers');

$teachersData = array();

foreach($teachers as $data) {
    array_push($teachersData, $data->username);
}

R::close();

$jsonData = json_encode($teachersData);

echo $jsonData;