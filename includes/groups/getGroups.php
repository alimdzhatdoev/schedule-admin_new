<?php
require '../include.php';

$selectedDirection = $_GET['direction'];

if (isset($selectedDirection)){
    $groups = R::find('groups', 'direction = ?', [$selectedDirection]);
} else {
    $groups = R::findAll('groups');
}


$groupsData = array();

foreach($groups as $data) {
    array_push($groupsData, $data->groupname);
}

R::close();

$jsonData = json_encode($groupsData);

echo $jsonData;