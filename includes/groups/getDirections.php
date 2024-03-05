<?php
require '../include.php';

$groups = R::findAll('directions');

$groupsData = array();

foreach($groups as $data) {
    array_push($groupsData, $data->direction);
}

R::close();

$jsonData = json_encode($groupsData);

echo $jsonData;