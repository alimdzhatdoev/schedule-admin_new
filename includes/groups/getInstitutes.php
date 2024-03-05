<?php
require '../include.php';

$groups = R::findAll('institutes');

$groupsData = array();

foreach($groups as $data) {
    array_push($groupsData, $data->institutesname);
}

R::close();

$jsonData = json_encode($groupsData);

echo $jsonData;