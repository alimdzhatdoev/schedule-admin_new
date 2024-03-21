<?php
require '../include.php';


if (isset($_GET['direction'])){
    $selectedDirection = $_GET['direction'];
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