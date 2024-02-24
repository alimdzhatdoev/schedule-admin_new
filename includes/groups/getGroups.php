<?php
require '../include.php';

$groups = R::findAll('groups');

$groupsData = array();

foreach($groups as $data) {
    array_push($groupsData, $data->groupname);
}

R::close();

$jsonData = json_encode($groupsData);

echo $jsonData;